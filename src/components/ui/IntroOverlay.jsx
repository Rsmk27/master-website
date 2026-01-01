import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const IntroOverlay = React.memo(({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const bootSequence = [
            { text: "INITIALIZING CORE SYSTEMS...", delay: 200 },
            { text: "LOADING NEURAL MODULES...", delay: 800 },
            { text: "ESTABLISHING SECURE CONNECTION...", delay: 1500 },
            { text: "SYNCING PROJECT DATABASES...", delay: 2200 },
            { text: "OPTIMIZING VISUAL INTERFACES...", delay: 2800 },
            { text: "ACCESS GRANTED. WELCOME USER.", delay: 3400 },
        ];

        let timeouts = [];

        // Text Sequence
        bootSequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, text]);
            }, delay);
            timeouts.push(timeout);
        });

        // Progress Bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                // Non-linear progress for realism
                const increment = Math.random() * 5 + 1;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        // Completion
        const completeTimeout = setTimeout(onComplete, 4000);
        timeouts.push(completeTimeout);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono p-4 text-cyan-500 overflow-hidden"
        >
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="w-full max-w-lg relative z-10">
                {/* Terminal Window */}
                <div className="bg-black/80 border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <div className="ml-auto text-[10px] text-cyan-700 tracking-widest">ROOT@SYSTEM:~</div>
                    </div>

                    <div className="h-48 font-mono text-sm md:text-base space-y-2 overflow-hidden flex flex-col justify-end">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-cyan-400/90"
                            >
                                <span className="text-cyan-600 mr-2">➜</span>
                                {line}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="text-cyan-500"
                        >
                            _
                        </motion.div>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="mt-8 space-y-2">
                    <div className="flex justify-between text-xs font-bold tracking-[0.2em] text-cyan-600">
                        <span>LAUNCHING...</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-cyan-950 rounded-full overflow-hidden border border-cyan-900/50">
                        <motion.div
                            className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                            style={{ width: `${progress}%` }}
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
});
IntroOverlay.displayName = "IntroOverlay";
