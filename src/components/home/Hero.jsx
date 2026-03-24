import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section id="overview" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Abstract Background - Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] dark:bg-primary/10"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] bg-sky-500/5 opacity-10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container-padding relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 backdrop-blur-sm shadow-sm transition-colors duration-300">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
                    Personal showcase of shipped builds
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-secondary dark:text-white mb-8 tracking-tight leading-[1.1]">
                        One Place For <br className="hidden md:block" /> <span className="text-primary inline-block relative">
                            My Skills And Work
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0545 3.5539 77.0347 0.285856 195.539 2.21312" stroke="currentColor" strokeWidth="3"></path></svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl leading-relaxed font-light">
                        I am Srinivas. I build software products, embedded systems, and AI tools.
                        This portfolio is my live archive of projects, technical depth, and ongoing experiments.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="/#work"
                            className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto flex items-center justify-center group"
                        >
                            Explore Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-8 py-4 bg-white dark:bg-slate-900 text-secondary dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm"
                        >
                            Project Archive
                        </button>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md p-6 lg:p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-secondary dark:text-white">At A Glance</h2>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Builder Profile</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Focus</p>
                            <p className="text-sm font-semibold text-secondary dark:text-white mb-0">Full-Stack + IoT + AI</p>
                        </div>
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Approach</p>
                            <p className="text-sm font-semibold text-secondary dark:text-white mb-0">Build, Ship, Iterate</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary/40 transition-colors">
                            <Github size={16} /> GitHub
                        </a>
                        <a href="https://its.rsmk.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary/40 transition-colors">
                            <ExternalLink size={16} /> Live Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
