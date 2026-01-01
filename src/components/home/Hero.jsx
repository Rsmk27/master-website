import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WarpBackground } from '@/components/ui/WarpBackground';
import { ArrowDown } from 'lucide-react';
import DecryptionText from "@/components/DecryptionText";
// DecryptionText was used in original code, I assume it's available in components/DecryptionText

export default function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <WarpBackground className="absolute inset-0 w-full h-full p-0 border-none bg-transparent" gridColor="rgba(6,182,212,0.15)">
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

                    <motion.img
                        src="/logo.png"
                        alt="RSMK Logo"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className="w-24 h-24 mb-8 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.5 }}
                        className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">System Online</span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                        <span className="block mb-2 md:mb-0 md:inline">RSMK</span>
                        <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Technologies</span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10"
                    >
                        Building the digital infrastructure of tomorrow.
                        <span className="block text-cyan-500/80 mt-2 font-mono text-sm uppercase tracking-widest">
                            Simplicity • Precision • Intelligence
                        </span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 4.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="/ecosystem" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]">
                            Explore Ecosystem
                        </a>
                        <a href="/about" className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium rounded transition-all">
                            Our Vision
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity, y }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-widest">Scroll to Navigate</span>
                        <ArrowDown className="animate-bounce" size={20} />
                    </motion.div>

                </div>
            </WarpBackground>
        </section>
    );
}
