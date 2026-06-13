import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMani from '../hooks/useMani';

export default function ManiSpeechBubble() {
  const { message, showMessage } = useMani();

  const handleDismiss = () => {
    showMessage('');
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={handleDismiss}
          className="absolute bottom-full mb-3 right-6 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 shadow-xl px-4 py-3 rounded-2xl max-w-[240px] min-w-[140px] text-xs font-medium leading-relaxed cursor-pointer select-none hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
        >
          {/* Bubble content */}
          <div className="relative">
            {message}
            {/* Click to dismiss indicator on hover */}
            <span className="absolute -bottom-1 -right-1 text-[8px] text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono font-normal">
              click to dismiss
            </span>
          </div>

          {/* Speech Bubble Arrow */}
          <div className="absolute bottom-[-6px] right-10 w-3 h-3 bg-white dark:bg-slate-900 border-r border-b border-slate-200/80 dark:border-slate-800/80 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
