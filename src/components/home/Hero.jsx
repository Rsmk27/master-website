import React, { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { SVG3D } from "3dsvg";
import RotatingText from './RotatingText';

export default function Hero() {
    const navigate = useNavigate();

    const phrases = useMemo(
        () => ['embedded systems', 'IoT platforms', 'power electronics', 'AI automation'],
        []
    );

    return (
        <section id="overview" className="relative pt-24 pb-16 md:pt-44 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Abstract Background - Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] dark:bg-primary/10"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] bg-sky-500/5 opacity-10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container-padding relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center overflow-x-hidden">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mb-6 md:mb-8 backdrop-blur-sm shadow-sm transition-colors duration-300">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 sm:mr-3 animate-pulse"></span>
                        Official showcase of engineered products & systems
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-secondary dark:text-white mb-5 md:mb-8 tracking-tight leading-[1.1]">
                        Pioneering <br className="hidden md:block" /> <span className="text-primary inline-block relative">
                            Electronics & IoT
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0545 3.5539 77.0347 0.285856 195.539 2.21312" stroke="currentColor" strokeWidth="3"></path></svg>
                        </span>
                        <span className="sr-only"> at RSMK Technologies</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 md:mb-10 max-w-3xl leading-relaxed font-light">
                        We are RSMK Technologies. We design <RotatingText
                            texts={phrases}
                            mainClassName="px-1.5 sm:px-2 md:px-3 bg-primary/10 text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex items-center min-h-[1.4rem] sm:min-h-[1.8rem] md:min-h-[2.5rem] max-w-full"
                            staggerFrom="last"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-120%' }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        /><br className="sm:hidden" /> and custom software systems.
                        Focused on robust hardware, cloud telemetry, and AI division operations under our motto: <strong className="font-semibold text-primary">"AI for easy life."</strong>
                    </p>

                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                        <a
                            href="/#work"
                            className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto flex items-center justify-center group"
                        >
                            Explore Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </a>
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-slate-900 text-secondary dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm"
                        >
                            Product Showcase
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: 0 }} 
                    animate={{ opacity: 1, scale: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} 
                    className="relative flex items-center justify-center lg:justify-end min-h-[280px] sm:min-h-[350px] lg:min-h-[500px] lg:translate-x-20"
                >
                    <div className="absolute inset-0 z-0 bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    <div className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] flex flex-col items-center">
                        <div className="w-full aspect-square">
                            <SVG3D
                                svg="/rsmk.svg"
                                depth={0.9}
                                smoothness={0.4}
                                color="#3b82f6"
                                animate="spinFloat"
                                animateSpeed={1.6}
                                zoom={7.5}
                                lightPosition={[5, 8, 5]}
                                lightIntensity={1.5}
                                ambientIntensity={0.4}
                                shadow={true}
                            />
                        </div>
                        
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary/40 transition-all">
                                <Github size={16} /> GitHub
                            </a>
                            <Link to="/about-us" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary/40 transition-all">
                                <ExternalLink size={16} /> About Our Team
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
