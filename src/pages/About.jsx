import React from 'react';
import { motion } from 'framer-motion';
import HoverFooter from '@/components/demo/HoverFooter';

export default function About() {
    return (
        <div className="min-h-screen pt-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10 pb-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        About <span className="text-cyan-500">RSMK Technologies</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light">
                        Engineering Tomorrow — From <span className="text-cyan-400">Hardware</span> to <span className="text-cyan-400">Software</span>
                    </p>
                </motion.div>

                <div className="space-y-20 text-slate-300 leading-relaxed text-lg">
                    {/* Introduction */}
                    <section className="max-w-3xl mx-auto text-center">
                        <p className="mb-6">
                            RSMK Technologies is an independent engineering and technology venture founded with a simple belief:
                            <br />
                            <span className="text-white font-medium">great innovation is born when classical engineering meets modern intelligence.</span>
                        </p>
                        <p>
                            We operate at the intersection of Electrical Engineering, Embedded Systems, Software Development, and Smart Digital Products, delivering solutions that are practical, scalable, and built for real-world impact.
                        </p>
                        <p className="mt-6">
                            Our work spans across IoT systems, intelligent web platforms, productivity tools, educational technology, and sustainable engineering concepts — all driven by a commitment to quality, simplicity, and long-term relevance.
                        </p>
                    </section>

                    {/* Who We Are */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">Who We Are</h2>
                        <div className="space-y-6">
                            <p>
                                RSMK Technologies was created by an Electrical & Electronics Engineering enthusiast with a deep respect for core engineering principles and a forward-looking mindset toward emerging technologies.
                            </p>
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                                <p className="mb-4 font-medium text-white">We believe in building things the right way:</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['Strong fundamentals', 'Clean design', 'Thoughtful engineering', 'Measurable value'].map((item) => (
                                        <li key={item} className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 italic text-cyan-400">
                                    Not trends. Not shortcuts. Just solid engineering, done properly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What We Build */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">What We Build</h2>
                        <p className="mb-8">We develop products and platforms that combine hardware-level thinking with modern software execution:</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Engineering Products */}
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                                <div className="text-4xl mb-4">⚙️</div>
                                <h3 className="text-xl font-bold text-white mb-4">Engineering Products</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>Embedded & IoT systems</li>
                                    <li>Smart energy & automation concepts</li>
                                    <li>Hardware-software integrated solutions</li>
                                </ul>
                            </div>

                            {/* Digital Platforms */}
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                                <div className="text-4xl mb-4">🌐</div>
                                <h3 className="text-xl font-bold text-white mb-4">Digital Platforms</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><strong className="text-cyan-400">ColorOhm</strong> — Resistor color code calculator & electronics toolkit</li>
                                    <li><strong className="text-cyan-400">BudgetBuddy</strong> — Smart personal finance & expense management system</li>
                                    <li><strong className="text-cyan-400">Zest Academy</strong> — Engineering learning & skill development platform</li>
                                </ul>
                            </div>

                            {/* Innovation Focus Areas */}
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                                <div className="text-4xl mb-4">🧠</div>
                                <h3 className="text-xl font-bold text-white mb-4">Innovation Focus Areas</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>Smart Energy Systems</li>
                                    <li>Autonomous & Intelligent Grids</li>
                                    <li>Green Technology</li>
                                    <li>Vibe-driven product engineering</li>
                                    <li>Practical AI integration in real applications</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Philosophy */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">Our Philosophy</h2>
                        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-transparent p-8 rounded-2xl border-l-4 border-cyan-500">
                            <p className="text-xl text-white italic mb-6">
                                "We do not build projects for display. We build systems that solve problems."
                            </p>
                            <p className="mb-4">We value:</p>
                            <ul className="space-y-2 mb-6">
                                <li>• Engineering discipline over shortcuts</li>
                                <li>• Long-term thinking over temporary success</li>
                                <li>• Function before fashion</li>
                                <li>• Impact over noise</li>
                            </ul>
                            <p className="text-cyan-400 font-medium">
                                Every product from RSMK Technologies is designed to be: useful, understandable, and dependable.
                            </p>
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p>To design and deliver intelligent, sustainable, and practical engineering solutions that empower individuals, businesses, and future engineers.</p>
                        </section>

                        <section className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p>To grow RSMK Technologies into a trusted engineering brand — known for reliability, innovation, and meaningful contribution to the future of technology.</p>
                        </section>
                    </div>

                </div>
            </div>
            <div className="relative z-10">
                <HoverFooter />
            </div>
        </div>
    );
}
