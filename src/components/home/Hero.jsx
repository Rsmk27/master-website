import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Abstract Background - Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] dark:bg-primary/10"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] bg-sky-500/5 opacity-10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container-padding relative z-10 text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 backdrop-blur-sm shadow-sm transition-colors duration-300">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
                    Your Partner in Digital Transformation
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-secondary dark:text-white mb-8 tracking-tight leading-[1.1]">
                    Engineering the Future of <br className="hidden md:block" /> <span className="text-primary inline-block relative">
                        Technology
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0545 3.5539 77.0347 0.285856 195.539 2.21312" stroke="currentColor" strokeWidth="3"></path></svg>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                    We deliver specialized <span className="font-semibold text-secondary dark:text-white">Software, IoT, Embedded Systems, and AI</span> solutions.
                    RSMK Technologies builds scalable, future-ready infrastructure for business excellence.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/services')}
                        className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto flex items-center justify-center group"
                    >
                        Explore Our Solutions <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white dark:bg-slate-900 text-secondary dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
