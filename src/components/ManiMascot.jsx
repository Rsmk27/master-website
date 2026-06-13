import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useMani from '../hooks/useMani';
import { maniSounds } from '../utils/maniSounds';

export default function ManiMascot() {
  const { mood, celebrate, setMood, completeGoal } = useMani();
  const mascotRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Handle pupil tracking (mouse movement)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current || mood === 'sleeping') {
        setPupilOffset({ x: 0, y: 0 });
        return;
      }

      const rect = mascotRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - mascotCenterX;
      const dy = e.clientY - mascotCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance === 0) return;

      // Max pupil offset of 4.5px
      const maxOffset = 4.5;
      const factor = Math.min(distance / 150, 1) * maxOffset;
      
      // Look up slightly if in thinking or loading states
      let extraY = 0;
      if (mood === 'thinking' || mood === 'loading') {
        extraY = -3.5;
      }

      setPupilOffset({
        x: (dx / distance) * factor,
        y: (dy / distance) * factor + extraY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mood]);

  // Handle random blinking
  useEffect(() => {
    let blinkTimer;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
      
      const nextBlinkTime = 3000 + Math.random() * 5000; // blink every 3-8 seconds
      blinkTimer = setTimeout(triggerBlink, nextBlinkTime);
    };

    blinkTimer = setTimeout(triggerBlink, 4000);
    return () => clearTimeout(blinkTimer);
  }, []);

  // Framer Motion variants
  // Breathing/Floating animation wrapper (disabled during drag)
  const floatVariants = {
    animate: {
      y: isDragging ? 0 : (mood === 'sleeping' ? [0, -4, 0] : [0, -8, 0]),
      rotate: isDragging ? 0 : (mood === 'sleeping' ? [15, 14, 15] : [0, 0.5, -0.5, 0]),
      transition: {
        y: {
          repeat: isDragging ? 0 : Infinity,
          duration: mood === 'sleeping' ? 4.5 : 3.5,
          ease: 'easeInOut',
        },
        rotate: {
          repeat: isDragging ? 0 : Infinity,
          duration: 6,
          ease: 'easeInOut',
        }
      }
    }
  };

  // Bounce/Jump animation for happy/celebrating
  const mascotVariants = {
    idle: { scale: 1, y: 0 },
    happy: {
      scale: [1, 1.05, 0.98, 1.03, 1],
      y: [0, -15, 2, -5, 0],
      transition: { duration: 0.6, ease: 'easeInOut' }
    },
    celebrating: {
      scale: [1, 1.08, 0.95, 1.05, 1],
      y: [0, -32, 4, -10, 0],
      rotate: [0, -5, 5, -2, 0],
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    curious: {
      scale: 1.02,
      rotate: -5,
      transition: { duration: 0.3 }
    },
    thinking: {
      scale: 1,
      rotate: 2,
      transition: { duration: 0.4 }
    },
    coding: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.4 }
    },
    sleeping: {
      scale: 0.96,
      transition: { duration: 0.5 }
    }
  };

  // Tentacle wiggling variant
  const tentacleVariants = {
    animate: {
      rotate: mood === 'sleeping' ? [-0.5, 0.5, -0.5] : [-3, 3, -3],
      transition: {
        repeat: Infinity,
        duration: mood === 'sleeping' ? 5 : 2.5,
        ease: 'easeInOut',
      }
    }
  };

  // Double click handler to celebrate
  const handleDoubleClick = () => {
    celebrate();
  };

  return (
    <motion.div
      ref={mascotRef}
      className="w-32 h-32 md:w-36 md:h-36 cursor-grab active:cursor-grabbing select-none relative group"
      variants={floatVariants}
      animate="animate"
      whileHover={{ scale: 1.05 }}
      onDoubleClick={handleDoubleClick}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
      onDragStart={() => {
        setIsDragging(true);
        setMood('curious');
        maniSounds.playPop();
      }}
      onDragEnd={() => {
        setIsDragging(false);
        setMood('happy');
        maniSounds.playBouncy();
        if (completeGoal) completeGoal('play');
      }}
      onMouseEnter={() => {
        if (!isDragging && mood !== 'sleeping') {
          maniSounds.playPop();
        }
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        variants={mascotVariants}
        animate={mood}
        initial="idle"
      >
        <defs>
          {/* Drop shadow for the mascot */}
          <radialGradient id="drop-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>

          {/* Body gradient for 3D sphere look */}
          <radialGradient id="body-grad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#ff5c5c" />
            <stop offset="70%" stop-color="#e11d1d" />
            <stop offset="100%" stop-color="#990000" />
          </radialGradient>

          {/* Tentacle gradient */}
          <radialGradient id="tentacle-grad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#ff4d4d" />
            <stop offset="100%" stop-color="#aa0808" />
          </radialGradient>

          {/* Pupil gradient */}
          <radialGradient id="eye-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#2a2a2a" />
            <stop offset="100%" stop-color="#050505" />
          </radialGradient>

          {/* Screen glow gradient */}
          <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#a5f3fc" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
          </linearGradient>

          {/* Blanket pattern */}
          <pattern id="polka-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2.5" fill="#ffffff" opacity="0.8" />
          </pattern>

        </defs>

        {/* Ground Shadow */}
        <ellipse cx="100" cy="178" rx={mood === 'celebrating' ? 38 : 65} ry="11" fill="url(#drop-shadow)" />

        {/* Loading Ring */}
        {mood === 'loading' && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            style={{ originX: '100px', originY: '38px' }}
          >
            <circle cx="100" cy="20" r="3.5" fill="#3b82f6" opacity="0.2" />
            <circle cx="114" cy="24" r="3.5" fill="#3b82f6" opacity="0.4" />
            <circle cx="123" cy="35" r="3.5" fill="#3b82f6" opacity="0.6" />
            <circle cx="120" cy="49" r="3.5" fill="#3b82f6" opacity="0.8" />
            <circle cx="107" cy="57" r="3.5" fill="#3b82f6" opacity="1.0" />
            <circle cx="93" cy="57" r="3.5" fill="#3b82f6" opacity="0.8" />
            <circle cx="80" cy="49" r="3.5" fill="#3b82f6" opacity="0.6" />
            <circle cx="77" cy="35" r="3.5" fill="#3b82f6" opacity="0.4" />
            <circle cx="86" cy="24" r="3.5" fill="#3b82f6" opacity="0.2" />
          </motion.g>
        )}

        {/* Confetti (Celebration) */}
        {mood === 'celebrating' && (
          <g id="confetti">
            <motion.rect x="35" y="45" width="6" height="10" rx="2" fill="#3b82f6" animate={{ y: [0, 40, 0], rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            <motion.circle cx="50" cy="75" r="4" fill="#f59e0b" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} />
            <motion.path d="M 160 60 L 166 70 L 154 70 Z" fill="#8b5cf6" animate={{ y: [0, 30, 0], rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 1.8 }} />
            <motion.rect x="145" y="40" width="10" height="6" rx="2" fill="#10b981" animate={{ y: [0, 50, 0], x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
            <circle cx="168" cy="90" r="3.5" fill="#ef4444" />
          </g>
        )}

        {/* Zzz (Sleeping) */}
        {mood === 'sleeping' && (
          <g id="zzz" fill="#3b82f6">
            <motion.text x="50" y="55" font-family="sans-serif" font-weight="bold" font-size="12" animate={{ opacity: [0.2, 0.8, 0.2], y: [55, 48, 55], x: [50, 47, 50] }} transition={{ repeat: Infinity, duration: 2.2 }}>z</motion.text>
            <motion.text x="40" y="42" font-family="sans-serif" font-weight="bold" font-size="17" animate={{ opacity: [0.3, 0.9, 0.3], y: [42, 32, 42], x: [40, 35, 40] }} transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}>Z</motion.text>
            <motion.text x="26" y="26" font-family="sans-serif" font-weight="bold" font-size="23" animate={{ opacity: [0.4, 1.0, 0.4], y: [26, 14, 26], x: [26, 18, 26] }} transition={{ repeat: Infinity, duration: 2.2, delay: 1.0 }}>Z</motion.text>
          </g>
        )}

        {/* Thought Bubble (Thinking) */}
        {mood === 'thinking' && (
          <g id="thought-bubble" opacity="0.95">
            <circle cx="100" cy="28" r="14" fill="#ffffff" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.08))" />
            <circle cx="112" cy="24" r="9" fill="#ffffff" />
            <circle cx="88" cy="26" r="9" fill="#ffffff" />
            <circle cx="106" cy="45" r="5" fill="#ffffff" />
            <circle cx="102" cy="54" r="3" fill="#ffffff" />
            
            <circle cx="92" cy="27" r="1.8" fill="#888888" />
            <circle cx="100" cy="27" r="1.8" fill="#888888" />
            <circle cx="108" cy="27" r="1.8" fill="#888888" />
          </g>
        )}

        {/* Sparkles (Happy / Excited) */}
        {mood === 'happy' && (
          <g id="sparkles">
            <motion.path d="M 35 60 Q 40 60 40 55 Q 40 60 45 60 Q 40 60 40 65 Q 40 60 35 60" fill="#f59e0b" animate={{ scale: [1, 1.2, 0.9, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            <motion.path d="M 160 55 Q 165 55 165 50 Q 165 55 170 55 Q 165 55 165 60 Q 165 55 160 55" fill="#f59e0b" animate={{ scale: [0.9, 1.2, 1, 0.9] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} />
          </g>
        )}

        {/* Tentacles */}
        <motion.g
          id="tentacles"
          variants={tentacleVariants}
          animate="animate"
          style={{ originX: '100px', originY: '140px' }}
        >
          {/* Leftmost Base Tentacle (always visible) */}
          <circle cx="54" cy="154" r="16" fill="url(#tentacle-grad)" />

          {/* Left-inner Base Tentacle (hidden in coding and thinking) */}
          {mood !== 'coding' && mood !== 'thinking' && (
            <circle cx="84" cy="164" r="17" fill="url(#tentacle-grad)" />
          )}

          {/* Right-inner Base Tentacle (hidden in coding) */}
          {mood !== 'coding' && (
            <circle cx="116" cy="164" r="17" fill="url(#tentacle-grad)" />
          )}

          {/* Rightmost Base Tentacle (hidden in curious) */}
          {mood !== 'curious' && (
            <circle cx="146" cy="154" r="16" fill="url(#tentacle-grad)" />
          )}
        </motion.g>

        {/* Main Plush Body */}
        <circle cx="100" cy="105" r="62" fill="url(#body-grad)" />



        {/* Thinking Raised Tentacle */}
        {mood === 'thinking' && (
          <path d="M 94 158 C 94 142, 114 128, 109 119 C 107 115, 101 117, 96 121 C 91 125, 91 138, 91 158 Z" fill="url(#tentacle-grad)" />
        )}

        {/* Curious Raised Tentacle (Holds Magnifying Glass) */}
        {mood === 'curious' && (
          <path d="M 125 155 Q 140 145, 132 122 Q 128 116, 122 120 C 118 124, 122 135, 124 155 Z" fill="url(#tentacle-grad)" />
        )}

        {/* Eyes & Mouth Container */}
        <g id="face">
          {/* Mouth */}
          {isDragging ? (
            <circle cx="100" cy="118" r="6.5" fill="#1a1a1a" />
          ) : mood === 'happy' || mood === 'celebrating' ? (
            <path d="M 93 112 Q 100 126 107 112 Z" fill="#b91c1c" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round" />
          ) : mood === 'sleeping' ? (
            <path d="M 98 123 Q 100 125 102 123" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" fill="none" />
          ) : mood === 'curious' ? (
            <path d="M 94 118 Q 100 122 105 116" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" fill="none" />
          ) : (
            <path d="M 96 116 Q 100 120 104 116" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" fill="none" />
          )}

          {/* Left Eye */}
          {isDragging ? (
            <g id="left-eye-dragging">
              <circle cx="76" cy="100" r="14" fill="url(#eye-grad)" />
              <circle cx="73" cy="95" r="5" fill="#ffffff" />
              <circle cx="80" cy="103" r="2" fill="#ffffff" />
            </g>
          ) : mood === 'happy' ? (
            <path d="M 66 98 Q 76 86 86 98" stroke="#1a1a1a" stroke-width="4.5" stroke-linecap="round" fill="none" />
          ) : mood === 'celebrating' ? (
            // Winking left eye (>)
            <path d="M 66 87 L 78 95 L 66 103" fill="none" stroke="#1a1a1a" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
          ) : mood === 'sleeping' ? (
            <path d="M 72 112 Q 80 120 88 112" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" fill="none" />
          ) : mood === 'curious' ? (
            <path d="M 68 103 Q 76 93 84 103" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" fill="none" />
          ) : (
            // Glossy Pupil
            <g id="left-eye-pupil">
              <circle cx="76" cy="100" r="12" fill="url(#eye-grad)" />
              {/* Eyelid for Blinking */}
              <motion.ellipse
                cx="76"
                cy="100"
                rx="13"
                ry="13"
                fill="url(#body-grad)"
                style={{ originY: '87px' }}
                animate={{ scaleY: isBlinking ? 1 : 0 }}
                transition={{ duration: 0.12 }}
              />
              {/* Glossy sparkles overlay (translating with mouse) */}
              <motion.g
                animate={{ x: pupilOffset.x, y: pupilOffset.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              >
                <circle cx="73" cy="96" r="4.2" fill="#ffffff" />
                <circle cx="79" cy="103" r="1.8" fill="#ffffff" />
              </motion.g>
            </g>
          )}

          {/* Right Eye */}
          {isDragging ? (
            <g id="right-eye-dragging">
              <circle cx="124" cy="100" r="14" fill="url(#eye-grad)" />
              <circle cx="121" cy="95" r="5" fill="#ffffff" />
              <circle cx="128" cy="103" r="2" fill="#ffffff" />
            </g>
          ) : mood === 'happy' ? (
            <path d="M 114 98 Q 124 86 134 98" stroke="#1a1a1a" stroke-width="4.5" stroke-linecap="round" fill="none" />
          ) : mood === 'sleeping' ? (
            <path d="M 112 112 Q 120 120 128 112" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" fill="none" />
          ) : (
            // Glossy Pupil
            <g id="right-eye-pupil">
              {/* If curious, draw right eye slightly magnified! */}
              <circle cx="124" cy="100" r={mood === 'curious' ? 14 : 12} fill="url(#eye-grad)" />
              {/* Eyelid for Blinking */}
              <motion.ellipse
                cx="124"
                cy="100"
                rx="13"
                ry="13"
                fill="url(#body-grad)"
                style={{ originY: '87px' }}
                animate={{ scaleY: isBlinking ? 1 : 0 }}
                transition={{ duration: 0.12 }}
              />
              <motion.g
                animate={{ x: pupilOffset.x, y: pupilOffset.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              >
                <circle cx={mood === 'curious' ? 120 : 121} cy="96" r={mood === 'curious' ? 4.8 : 4.2} fill="#ffffff" />
                <circle cx={mood === 'curious' ? 128 : 127} cy="103" r={mood === 'curious' ? 2 : 1.8} fill="#ffffff" />
              </motion.g>
            </g>
          )}
        </g>



        {/* Screen Glow / Laptop Accessories (Coding) */}
        {mood === 'coding' && (
          <>
            <path d="M 70 125 L 130 125 L 145 155 L 55 155 Z" fill="url(#screen-glow)" />
            <g id="laptop">
              {/* Laptop screen (open lid) */}
              <path d="M 62 135 L 138 135 L 144 163 L 56 163 Z" fill="#334155" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round" />
              {/* Small red octopus icon on laptop lid */}
              <circle cx="100" cy="149" r="4" fill="#ef4444" />
              <circle cx="97" cy="152" r="1.2" fill="#ef4444" />
              <circle cx="100" cy="153" r="1.2" fill="#ef4444" />
              <circle cx="103" cy="152" r="1.2" fill="#ef4444" />
              
              {/* Laptop keyboard base */}
              <path d="M 52 163 L 148 163 L 156 174 L 44 174 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2" stroke-linejoin="round" />
              <line x1="65" x2="135" y1="168" y2="168" stroke="#475569" stroke-width="1.5" stroke-linecap="round" />
              <line x1="85" x2="115" y1="171" y2="171" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
            </g>
            {/* Typing tentacles */}
            <g id="typing-tentacles">
              <motion.path
                d="M 80 156 Q 74 156 82 166 Q 84 168 88 166 C 92 164 86 156 80 156 Z"
                fill="url(#tentacle-grad)"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 0.15 }}
              />
              <motion.path
                d="M 120 156 Q 126 156 118 166 Q 116 168 112 166 C 108 164 114 156 120 156 Z"
                fill="url(#tentacle-grad)"
                animate={{ y: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 0.15, delay: 0.08 }}
              />
            </g>
          </>
        )}

        {/* Magnifying Glass Overlay (Curious) */}
        {mood === 'curious' && (
          <g id="magnifying-glass" transform="translate(10, 0)">
            <rect x="110" y="115" width="8" height="30" rx="3" fill="#78350f" stroke="#451a03" stroke-width="1.5" transform="rotate(-35, 114, 130)" />
            <circle cx="114" cy="100" r="20" fill="none" stroke="#94a3b8" stroke-width="4.5" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))" />
            <circle cx="114" cy="100" r="20" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
            <circle cx="114" cy="100" r="18" fill="#06b6d4" fill-opacity="0.1" />
            <path d="M 102 90 A 18 18 0 0 1 126 90" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.6" />
          </g>
        )}

        {/* Blanket Overlay (Sleeping) */}
        {mood === 'sleeping' && (
          <g id="blanket">
            <path d="M 60 142 C 90 138, 120 142, 148 135 C 160 145, 160 172, 142 172 C 110 172, 70 172, 52 172 C 48 162, 48 148, 60 142 Z" fill="#2563eb" filter="drop-shadow(0px -3px 6px rgba(0,0,0,0.15))" />
            <path d="M 60 142 C 90 138, 120 142, 148 135 C 160 145, 160 172, 142 172 C 110 172, 70 172, 52 172 C 48 162, 48 148, 60 142 Z" fill="url(#polka-dots)" />
          </g>
        )}
      </motion.svg>
    </motion.div>
  );
}
