import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function RotatingText({
    texts = [],
    mainClassName = '',
    staggerFrom = 'last',
    initial = { opacity: 0, y: '100%' },
    animate = { opacity: 1, y: 0 },
    exit = { opacity: 0, y: '-120%' },
    staggerDuration = 0.02,
    splitLevelClassName = '',
    transition = { type: 'spring', damping: 30, stiffness: 400 },
    rotationInterval = 2000,
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!texts.length) {
            return undefined;
        }

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % texts.length);
        }, rotationInterval);

        return () => clearInterval(interval);
    }, [texts, rotationInterval]);

    const activeText = texts[activeIndex] || '';
    const characters = activeText.split('');

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: staggerDuration,
                staggerDirection: staggerFrom === 'last' ? -1 : 1,
            },
        },
    };

    const itemVariants = {
        initial,
        animate,
        exit,
        transition,
    };

    return (
        <span className={`inline-flex items-center ${mainClassName}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={`${activeText}-${activeIndex}`}
                    className="inline-flex overflow-hidden"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {characters.map((char, index) => (
                        <motion.span
                            key={`${activeText}-${index}`}
                            className={splitLevelClassName}
                            variants={itemVariants}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
