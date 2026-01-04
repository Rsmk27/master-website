import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '@/components/common/SEO';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <SEO title="404 - Page Not Found" />

            {/* Ambient background effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <motion.div
                    animate={{
                        textShadow: [
                            "2px 0 #ef4444",
                            "-2px 0 #3b82f6",
                            "0 0 transparent"
                        ]
                    }}
                    transition={{
                        duration: 0.2, // Fast glitch
                        repeat: Infinity,
                        repeatDelay: 3 // Occasional glitch
                    }}
                    className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 select-none opacity-90"
                    style={{ fontFamily: 'monospace' }}
                >
                    404
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-4">
                    Signal Lost
                </h2>

                <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
                    The sector you are trying to access is unreachable or does not exist.
                    Return to base to re-establish connection.
                </p>

                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-lg transition-all"
                >
                    <div className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-500/80 rounded-lg transition-all duration-300" />
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-all duration-300" />

                    <Home className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="font-mono text-cyan-400 group-hover:text-cyan-300 tracking-wider transition-colors">
                        RETURN TO BASE
                    </span>

                    {/* Scanning line effect on hover */}
                    <div className="absolute top-0 -left-full w-10 h-full bg-white/20 -skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
                </Link>
            </motion.div>

            {/* Decorative grid lines */}
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
            <div className="absolute top-20 right-20 w-32 h-32 border border-blue-900/20 rounded-full border-dashed animate-spin-slow" />
        </div>
    );
};

export default NotFound;
