import React from 'react';
import SEO from '@/components/common/SEO';

export default function About() {
    return (
        <div className="min-h-screen pt-24 container-padding pb-12 md:pb-20">
            <SEO 
                title="About Us" 
                description="Learn about RSMK Technologies, our core engineering philosophy, and our solutions in embedded systems, IoT, and artificial intelligence." 
                keywords="About RSMK Technologies, engineering philosophy, embedded systems, IoT, artificial intelligence" 
                url="/about-us" 
            />

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-secondary dark:text-white mb-4 md:mb-6 tracking-tight">
                        About <span className="text-primary">RSMK Technologies</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                        An engineering collective focused on <span className="text-primary font-medium">real systems that work</span>, not pitch decks.
                    </p>
                </div>

                <div className="space-y-10 md:space-y-16 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {/* Introduction */}
                    <section className="text-center max-w-3xl mx-auto">
                        <p className="mb-8">
                            RSMK Technologies was founded to design connected hardware, build robust software, and implement scalable technologies.
                        </p>
                        <p className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-6 md:mb-8 leading-tight">
                            We engineer solutions that are useful, testable, and grounded in systems theory.
                        </p>
                        <p>
                            Our capabilities span embedded firmware, internet-of-things architecture, power electronic simulators, and advanced artificial intelligence platforms.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="glass-panel p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Build in Public</h2>
                            <p>We publish active demos and prototypes so progress is visible and measurable.</p>
                        </div>

                        <div className="glass-panel p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Learn by Shipping</h2>
                            <p>Every deployment yields insights. We use production feedback to refine software stability and hardware logic.</p>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary dark:text-white mb-6 md:mb-8 border-l-4 border-primary pl-4 md:pl-6">Build Philosophy</h2>
                        <blockquote className="text-lg md:text-xl italic text-slate-700 dark:text-slate-200 mb-6 md:mb-8 font-serif leading-relaxed">
                            "The best portfolio is a set of products people can actually use."
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">End-to-End Ownership</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">We own the entire process from hardware schematics and firmware to cloud deployment and application iteration.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">Long-Term Iteration</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">All products are treated as active production systems, continuously refined for efficiency, speed, and safety.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
