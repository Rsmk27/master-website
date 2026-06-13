import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { maniSounds } from '../utils/maniSounds';

export const ManiContext = createContext(null);

export function ManiProvider({ children }) {
  // Global States
  const [mood, setMoodState] = useState('idle');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [achievements, setAchievements] = useState([]);

  // Daily goals state
  const [goals, setGoalsState] = useState(() => {
    const saved = localStorage.getItem('mani_goals_checked');
    return saved ? JSON.parse(saved) : { chat: false, explore: false, play: false };
  });

  const completeGoal = useCallback((name) => {
    setGoalsState((prev) => {
      if (prev[name]) return prev;
      const updated = { ...prev, [name]: true };
      localStorage.setItem('mani_goals_checked', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Refs for timers
  const messageTimeoutRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const inactivityTimeoutRef = useRef(null);
  const lastActiveRef = useRef(Date.now());

  // Safe wrapper for changing mood
  const setMood = useCallback((newMood) => {
    setMoodState(newMood);
    
    // Clear auto-idle timer on explicit mood change
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = null;
    }

    // Auto return to idle after some states (e.g. happy, thinking, curious, confused, tired)
    const temporaryStates = ['happy', 'thinking', 'curious', 'confused', 'tired', 'celebrating'];
    if (temporaryStates.includes(newMood)) {
      idleTimeoutRef.current = setTimeout(() => {
        setMoodState('idle');
      }, 6000);
    }
  }, []);

  // Show a message in the speech bubble
  const showMessage = useCallback((text, duration = 4000) => {
    // Clear previous timeout
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    
    setMessage(text);

    if (duration > 0) {
      messageTimeoutRef.current = setTimeout(() => {
        setMessage('');
      }, duration);
    }
  }, []);

  // API Methods
  const celebrate = useCallback(() => {
    setMood('celebrating');
    showMessage('Awesome! We did it! 🎉', 5000);
    maniSounds.playSuccess();
    unlockAchievement('Double Click Joy');
    completeGoal('play');
  }, [setMood, showMessage, completeGoal]);

  const sleep = useCallback(() => {
    setMood('sleeping');
    showMessage('Zzz... taking a cozy nap.', 5000);
    maniSounds.playSleep();
  }, [setMood, showMessage]);

  const wakeUp = useCallback(() => {
    setMood('happy');
    showMessage('Welcome back! Let\'s build something amazing! 🚀', 5000);
    maniSounds.playPop();
  }, [setMood, showMessage]);

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Achievement unlock mechanism
  const unlockAchievement = useCallback((name) => {
    setAchievements((prev) => {
      if (prev.includes(name)) return prev;
      const updated = [...prev, name];
      localStorage.setItem('mani_achievements', JSON.stringify(updated));
      
      // Notify user of achievement
      setTimeout(() => {
        setMood('happy');
        showMessage(`🏆 Achievement Unlocked: ${name}!`, 5000);
        maniSounds.playSuccess();
      }, 500);

      return updated;
    });
  }, [setMood, showMessage]);

  // Load and update daily streak & achievements
  useEffect(() => {
    // Load Achievements
    const savedAchievements = localStorage.getItem('mani_achievements');
    if (savedAchievements) {
      try {
        setAchievements(JSON.parse(savedAchievements));
      } catch (e) {
        console.error('Failed to parse achievements', e);
      }
    }

    // Handle Daily Streak
    const savedStreak = localStorage.getItem('mani_streak');
    const lastVisit = localStorage.getItem('mani_last_visit');
    const todayStr = new Date().toDateString();

    let currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;

    if (lastVisit) {
      const lastVisitDate = new Date(lastVisit);
      const todayDate = new Date(todayStr);
      const diffTime = Math.abs(todayDate - lastVisitDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Visited yesterday, increment streak
        currentStreak += 1;
        localStorage.setItem('mani_streak', currentStreak.toString());
        localStorage.setItem('mani_last_visit', todayStr);
      } else if (diffDays > 1) {
        // Broken streak, reset
        currentStreak = 1;
        localStorage.setItem('mani_streak', '1');
        localStorage.setItem('mani_last_visit', todayStr);
      }
    } else {
      // First visit ever or cleared cache
      currentStreak = 1;
      localStorage.setItem('mani_streak', '1');
      localStorage.setItem('mani_last_visit', todayStr);
    }
    
    setStreak(currentStreak);

    // Initial greeting bubble based on time
    const getGreeting = () => {
      const hours = new Date().getHours();
      if (hours >= 5 && hours < 12) {
        return "Good morning! ☀️ Ready for a coffee and some clean code?";
      } else if (hours >= 12 && hours < 17) {
        return "Good afternoon! ☕ Hope your day is going well. Let's make some progress!";
      } else if (hours >= 17 && hours < 22) {
        return "Good evening! 🌆 What are we working on tonight?";
      } else {
        return "Working late? 🌌 Let's build something epic, but don't forget to sleep!";
      }
    };

    const timer = setTimeout(() => {
      showMessage(getGreeting(), 5000);
      maniSounds.playPop();
    }, 2000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  // Inactivity monitoring (goes to sleep if inactive for 45s, wakes up on activity)
  useEffect(() => {
    const handleActivity = () => {
      const now = Date.now();
      lastActiveRef.current = now;

      // Wake up if was sleeping
      setMoodState((currentMood) => {
        if (currentMood === 'sleeping') {
          // Trigger wake up sequence
          setTimeout(() => {
            showMessage('Welcome back! Let\'s get to work!', 4000);
          }, 100);
          return 'happy';
        }
        return currentMood;
      });

      // Reset inactivity timer
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      inactivityTimeoutRef.current = setTimeout(() => {
        setMoodState((currentMood) => {
          if (currentMood !== 'sleeping') {
            showMessage('Taking a break? Zzz...', 5000);
            return 'sleeping';
          }
          return currentMood;
        });
      }, 45000); // 45 seconds of inactivity
    };

    // Listen to user input events
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // Start initial inactivity timer
    inactivityTimeoutRef.current = setTimeout(() => {
      setMoodState('sleeping');
      showMessage('Taking a break? Zzz...', 5000);
    }, 45000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, [showMessage]);

  // Check daily goals completion to unlock Daily Champion achievement
  useEffect(() => {
    if (goals.chat && goals.explore && goals.play) {
      if (!achievements.includes('Daily Champion')) {
        unlockAchievement('Daily Champion');
      }
    }
  }, [goals, achievements, unlockAchievement]);

  return (
    <ManiContext.Provider
      value={{
        mood,
        message,
        isOpen,
        streak,
        achievements,
        goals,
        completeGoal,
        setMood,
        showMessage,
        celebrate,
        sleep,
        wakeUp,
        togglePanel,
        setIsOpen,
        unlockAchievement,
      }}
    >
      {children}
    </ManiContext.Provider>
  );
}
