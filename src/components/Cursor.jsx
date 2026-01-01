import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring for the outer glow (laggy follower)
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (!isVisible) setIsVisible(true);

            const target = e.target;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <div className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            {/* 1. Large Ambient Lighting (The "Flashlight" Effect) */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_60%)]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* 2. Electric Core Glow (Intense blue halo) */}
            <motion.div
                className="absolute w-24 h-24 rounded-full bg-cyan-500/20 blur-xl mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isPointer ? 1.5 : 1,
                }}
            />

            {/* 3. The Physical Cursor Dot (Sharp, white-hot center) */}
            <motion.div
                className="absolute bg-white rounded-full shadow-[0_0_10px_2px_rgba(6,182,212,0.8)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isPointer ? 12 : 8,
                    height: isPointer ? 12 : 8,
                }}
                transition={{ duration: 0.1 }}
            />

            {/* 4. Reactive Ring (Expands on click/hover) */}
            <motion.div
                className="absolute rounded-full border border-cyan-400/50"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isPointer ? 40 : 20,
                    height: isPointer ? 40 : 20,
                    opacity: isPointer ? 1 : 0.5,
                }}
            />
        </div>
    );
};

export default Cursor;
