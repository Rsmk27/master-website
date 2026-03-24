import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div className="min-h-screen pt-24 container-padding pb-20">
            <Helmet>
                <title>About Me | RSMK - Builder Profile</title>
                <meta name="description" content="Learn about the person behind RSMK, the build philosophy, and the journey across software, embedded systems, and AI projects." />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-secondary dark:text-white mb-6 tracking-tight">
                        About <span className="text-primary">RSMK</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                        A builder focused on <span className="text-primary font-medium">real projects</span>, not pitch decks.
                    </p>
                </div>

                <div className="space-y-16 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {/* Introduction */}
                    <section className="text-center max-w-3xl mx-auto">
                        <p className="mb-8">
                            I started RSMK as a personal space to ship products, test ideas, and document the journey end-to-end.
                        </p>
                        <p className="font-heading text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-8 leading-tight">
                            Build things that are useful, testable, and alive on the internet.
                        </p>
                        <p>
                            My projects sit at the intersection of software engineering, embedded systems, and AI tooling.
                            I care about clarity, maintainability, and shipping frequently.
                        </p>
                    </section>

                    {/* Working Principles */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Build in Public</h2>
                            <p>I publish working demos whenever possible so progress is visible and measurable.</p>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Learn by Shipping</h2>
                            <p>Every launch teaches something. I use that feedback to improve architecture and product decisions.</p>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-3xl font-bold font-heading text-secondary dark:text-white mb-8 border-l-4 border-primary pl-6">Build Philosophy</h2>
                        <blockquote className="text-xl italic text-slate-700 dark:text-slate-200 mb-8 font-serif leading-relaxed">
                            "The best portfolio is a set of products people can actually use."
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">End-to-End Ownership</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">I handle ideation, implementation, deployment, and iteration so each build stays coherent.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary dark:text-white mb-2">Long-Term Iteration</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400">Projects are treated as living systems with regular updates, refactors, and performance improvements.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
