import React from 'react';
import { motion } from 'framer-motion';
import HoverFooter from '@/components/demo/HoverFooter';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24">
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-6">Foundation of Trust</h1>
                    <p className="text-xl text-cyan-500 font-mono tracking-wide">EST. 202X • HYDERABAD, INDIA</p>
                </motion.div>

                <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">The Story</h2>
                        <p>
                            RSMK Technologies began as a series of disconnected experiments—a student's portfolio of code.
                            Today, it has evolved into a structured engineering organization. We are not just building websites;
                            we are building a digital ecosystem that bridges the gap between hardware (IoT/Embedded) and software (Web/AI).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Philosophy</h2>
                        <p className="italic border-l-4 border-cyan-500 pl-6 py-2 bg-slate-900/50 rounded-r">
                            "Precision over decoration. Intelligence over noise. Sustainability over speed."
                        </p>
                        <p className="mt-4">
                            In an age of digital clutter, we focus on building robust, meaningful tools.
                            Whether it's a financial tracker like BudgetBuddy or an educational platform like Zest Academy,
                            every product serves a clear purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
                        <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                            <li>To create self-sustaining software ecosystems.</li>
                            <li>To innovate in Green Tech and Smart Energy management.</li>
                            <li>To provide accessible, high-quality digital tools for students and engineers.</li>
                        </ul>
                    </section>
                </div>

                <div className="my-24 p-8 border border-slate-800 rounded-2xl bg-slate-900/20 text-center">
                    <h3 className="text-2xl text-white font-bold mb-4">Join the Mission</h3>
                    <p className="text-slate-400 mb-6">We are always looking for collaborators in AI, IoT, and Web Development.</p>
                    <a href="/contact" className="px-8 py-3 bg-cyan-600 text-white rounded font-bold hover:bg-cyan-500 transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>
            <HoverFooter />
        </div>
    );
}
