import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen pt-24 container-padding pb-20">
            <Helmet>
                <title>About Us | RSMK Technologies - Our Story & Vision</title>
                <meta name="description" content="Learn about RSMK Technologies' mission, vision, and our journey from hardware to software engineering excellence." />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-secondary dark:text-white mb-6 tracking-tight">
                        About <span className="text-primary">RSMK Technologies</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                        Engineering Tomorrow — From <span className="text-primary font-medium">Hardware</span> to <span className="text-primary font-medium">Software</span>
                    </p>
                </motion.div>

                <div className="space-y-16 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {/* Introduction */}
                    <section className="text-center max-w-3xl mx-auto">
                        <p className="mb-8">
                            RSMK Technologies is an independent engineering and technology consulting firm founded with a simple belief:
                        </p>
                        <p className="font-heading text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-8 leading-tight">
                            Great innovation is born when classical engineering meets modern intelligence.
                        </p>
                        <p>
                            We operate at the intersection of Electrical Engineering, Embedded Systems, and Software Development, delivering solutions that are practical, scalable, and built for real-world impact.
                        </p>
                    </section>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Our Mission</h2>
                            <p>To design and deliver intelligent, sustainable, and practical engineering solutions that empower businesses to scale efficiently.</p>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Our Vision</h2>
                            <p>To be the trusted engineering partner for enterprises worldwide — known for reliability, innovation, and technical excellence.</p>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-3xl font-bold font-heading text-secondary dark:text-white mb-8 border-l-4 border-primary pl-6">Our Philosophy</h2>
                        <blockquote className="text-xl italic text-slate-700 dark:text-slate-200 mb-8 font-serif leading-relaxed">
                            "We do not build projects for display. We build systems that solve problems."
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">Detailed Engineering</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">We value discipline over shortcuts. Every line of code and every circuit is reviewed for quality to ensure robust performance.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">Long-Term Thinking</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">We build solutions that stand the test of time, prioritizing maintainability, security, and scalability from the start.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
