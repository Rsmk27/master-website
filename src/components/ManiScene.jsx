import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import useMani from '../hooks/useMani';
import ManiMascot from './ManiMascot';
import ManiSpeechBubble from './ManiSpeechBubble';
import ManiPanel from './ManiPanel';

export default function ManiScene() {
  const { togglePanel, celebrate } = useMani();
  const clickTimeoutRef = useRef(null);

  // Distinguish single click from double click smoothly
  const handleMascotClick = (e) => {
    e.stopPropagation();
    
    if (clickTimeoutRef.current) {
      // If a timer is active, this is a double-click
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      
      // Trigger double-click action (celebration!)
      celebrate();
    } else {
      // Set a timer for single-click action (toggle panel)
      clickTimeoutRef.current = setTimeout(() => {
        togglePanel();
        clickTimeoutRef.current = null;
      }, 250); // 250ms delay
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
      {/* Speech bubble - appears above the mascot */}
      <ManiSpeechBubble />

      {/* Sidebar Chat & Stats Panel */}
      <AnimatePresence>
        <ManiPanel />
      </AnimatePresence>

      {/* Mascot character container */}
      <div 
        className="pointer-events-auto select-none mt-2" 
        onClick={handleMascotClick}
      >
        <ManiMascot />
      </div>
    </div>
  );
}
