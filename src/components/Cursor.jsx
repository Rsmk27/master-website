import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isPointer ? 1.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isPointer ? 1.5 : 1,
                    borderColor: isPointer ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)'
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8
                }}
            />

            {/* Crosshair lines (optional, for extra tech feel) */}
            <motion.div
                className="fixed top-0 left-0 w-full h-px bg-cyan-500/10 pointer-events-none z-[99]"
                animate={{ y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
            <motion.div
                className="fixed top-0 left-0 h-full w-px bg-cyan-500/10 pointer-events-none z-[99]"
                animate={{ x: mousePosition.x }}
                transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
        </>
    );
};

export default Cursor;
