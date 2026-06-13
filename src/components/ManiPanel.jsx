import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Lightbulb, BookOpen, CheckCircle, Send, Bot, User, Sparkles, Trophy, FireExtinguisher } from 'lucide-react';
import useMani from '../hooks/useMani';

const PROJECTS_LIST = [
  { id: 1, title: 'Smart LED Controller', level: 'Beginner', desc: 'Control addressable LED strips over WebSockets using ESP8266 and a web dashboard.' },
  { id: 2, title: 'Budget Buddy App', level: 'Intermediate', desc: 'Build an expense tracker with visual analytics using React Native, Expo, and ChartKit.' },
  { id: 3, title: 'SFMD Telemetry Node', level: 'Advanced', desc: 'Design a multi-sensor firmware hub on ESP32 that streams real-time telemetry via MQTT.' },
];

const RESOURCES_LIST = [
  { title: 'Embedded C Guidelines', url: 'https://github.com/Rsmk27', type: 'Firmware' },
  { title: 'IoT Telemetry Stack', url: 'https://github.com/Rsmk27', type: 'Hardware' },
  { title: 'React App Structures', url: '/', type: 'Frontend' },
];

export default function ManiPanel() {
  const {
    mood,
    isOpen,
    setIsOpen,
    setMood,
    showMessage,
    celebrate,
    streak,
    achievements,
    unlockAchievement,
    goals,
    completeGoal,
  } = useMani();

  const [activeTab, setActiveTab] = useState('chat');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'mani', text: "Hey! Ask me anything about RSMK Technologies, hardware telemetry, or my accessories! 🐙" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Debounced typing effect to transition Mani to/from coding mood
  useEffect(() => {
    if (input.trim() === '') return;

    const delayDebounceFn = setTimeout(() => {
      if (mood === 'coding' && !loading) {
        setMood('idle');
      }
    }, 1200);

    return () => clearTimeout(delayDebounceFn);
  }, [input, mood, loading, setMood]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!loading && mood !== 'thinking' && mood !== 'sleeping') {
      setMood('coding');
    }
  };

  const chatEndRef = useRef(null);

  // Scroll chat to bottom
  useEffect(() => {
    if (activeTab === 'chat' && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, activeTab]);

  if (!isOpen) return null;

  // Handles chat submits
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const query = input;
    setInput('');
    
    // Append user message
    setChatMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setLoading(true);
    setMood('thinking');
    
    // Update daily goals
    completeGoal('chat');

    try {
      const response = await fetch('https://project-mani-c0t3.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query,
          siteContext: "User is chatting with Mani via the floating interactive widget panel.",
          history: chatMessages.slice(-6).map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
        }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      if (data.success) {
        setChatMessages((prev) => [...prev, { sender: 'mani', text: data.response }]);
        setMood('happy');
        showMessage('Look what I found!', 3000);
      } else {
        throw new Error();
      }
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { sender: 'mani', text: "⚠️ System connection issue. My brain server is cold-starting. Try again in a minute!" }
      ]);
      setMood('confused');
    } finally {
      setLoading(false);
    }
  };

  // Select project idea
  const handleSelectProject = (projectTitle) => {
    setMood('coding');
    showMessage(`Cool choice! Let's build the ${projectTitle}! 💻`, 5000);
    completeGoal('explore');
    unlockAchievement('Aspiring Creator');
  };



  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30, x: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30, x: 20 }}
      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
      className="fixed right-4 bottom-24 md:right-6 z-[100] w-[370px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[80vh] flex flex-col bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden font-sans"
    >
      {/* Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white relative shadow-md">
            <Bot size={20} className={mood === 'loading' || loading ? 'animate-spin' : ''} />
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border border-white dark:border-slate-900"></span>
            </span>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white text-sm font-heading leading-tight flex items-center gap-1.5">
              Mani Assistant
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-full font-semibold flex items-center gap-0.5 shadow-sm">
                🔥 {streak} Day Streak
              </span>
              <span className="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-full font-semibold flex items-center gap-0.5">
                🏆 {achievements.length} Achievements
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Main panel content */}
      <div className="flex-grow overflow-y-auto p-5 min-h-0 bg-slate-50/20 dark:bg-slate-950/10">
        <AnimatePresence mode="wait">
          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col h-full"
            >
              {/* Chat history */}
              <div className="flex-grow overflow-y-auto space-y-3 pr-1 min-h-0 mb-4 h-[300px]">
                {chatMessages.map((msg, index) => {
                  const isMani = msg.sender === 'mani';
                  return (
                    <div
                      key={index}
                      className={`flex gap-2 max-w-[85%] ${isMani ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-sm ${
                        isMani ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {isMani ? <Bot size={13} /> : <User size={13} />}
                      </div>
                      <div className={`p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm border ${
                        isMani
                          ? 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 rounded-tl-none'
                          : 'bg-primary text-white border-transparent rounded-tr-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
                {loading && (
                  <div className="flex gap-2 max-w-[80%] mr-auto items-center">
                    <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 animate-spin">
                      <Bot size={13} />
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800/80 text-xs text-slate-400">
                      Mani is thinking...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-primary hover:bg-blue-600 text-white p-2.5 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center shadow-md shadow-blue-500/10"
                >
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          )}

          {activeTab === 'ideas' && (
            <motion.div
              key="ideas"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase font-mono tracking-wider mb-2">Select a Project Idea</h4>
              {PROJECTS_LIST.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleSelectProject(project.title)}
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-800 dark:text-white text-xs group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      project.level === 'Beginner' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                      project.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                      'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}>
                      {project.level}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
                    {project.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'guides' && (
            <motion.div
              key="guides"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase font-mono tracking-wider mb-2">Learning Resources</h4>
              {RESOURCES_LIST.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs block group-hover:text-primary transition-colors">
                        {resource.title}
                      </span>
                      <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono uppercase">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === 'goals' && (
            <motion.div
              key="goals"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase font-mono tracking-wider">Daily Goal Quest</h4>
                <span className="text-[10px] text-primary dark:text-blue-400 font-bold font-mono">
                  {Object.values(goals).filter(Boolean).length}/3 Completed
                </span>
              </div>
              <div className="space-y-3">
                {/* Goal 1 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <CheckCircle size={18} className={goals.chat ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'} />
                  <div>
                    <h5 className="font-semibold text-xs text-slate-800 dark:text-white leading-tight">Chat with Mani AI</h5>
                    <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-0.5">Send a message to Mani in the chat drawer.</p>
                  </div>
                </div>
                {/* Goal 2 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <CheckCircle size={18} className={goals.explore ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'} />
                  <div>
                    <h5 className="font-semibold text-xs text-slate-800 dark:text-white leading-tight">Explore Project Ideas</h5>
                    <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-0.5">Check out engineering project ideas in the ideas tab.</p>
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <CheckCircle size={18} className={goals.play ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'} />
                  <div>
                    <h5 className="font-semibold text-xs text-slate-800 dark:text-white leading-tight">Play with Mani</h5>
                    <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-0.5">Double-click or drag Mani to trigger a cute interaction.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


        </AnimatePresence>
      </div>

      {/* Footer Navigation Bar */}
      <div className="bg-slate-50 dark:bg-slate-950 px-3 py-2 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center">
        {[
          { id: 'chat', icon: MessageSquare, label: 'Chat' },
          { id: 'ideas', icon: Lightbulb, label: 'Ideas' },
          { id: 'guides', icon: BookOpen, label: 'Guides' },
          { id: 'goals', icon: CheckCircle, label: 'Goals' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-all min-w-[50px] ${
                isActive
                  ? 'text-primary dark:text-blue-400 font-bold scale-105'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <Icon size={18} />
              <span className="text-[9px] mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
