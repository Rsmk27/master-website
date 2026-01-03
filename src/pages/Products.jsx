import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/ecosystem';
import { ExternalLink, ArrowRight, Zap, Target } from 'lucide-react';
import HoverFooter from '@/components/demo/HoverFooter';
import SEO from '@/components/common/SEO';

export default function Products() {
    const flagships = projects.filter(p => p.type === 'Flagship');

    return (
        <div className="min-h-screen pt-24">
            <SEO title="Products & Platforms" description="Explore our specialized platforms for finance, education, and engineering." />
            <div className="max-w-6xl mx-auto px-6 mb-16">
                <h1 className="text-4xl font-bold text-white mb-6">Products & Platforms</h1>
                <p className="text-slate-400 text-lg max-w-3xl">
                    Our specialized platforms designed for finance, education, and engineering utilities.
                    Each product operates as an independent division under the RSMK umbrella.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
                {flagships.map((product, index) => (
                    <section key={index} className="flex flex-col md:flex-row gap-12 items-start transition-opacity">
                        <div className="w-full md:w-1/2">
                            <div className="aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-600">
                                        Preview Unavailable
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-${product.glowColor}-400 text-xs font-mono mb-2 uppercase tracking-widest`}>
                                        <div className={`w-1.5 h-1.5 rounded-full bg-${product.glowColor}-400 animate-pulse`} />
                                        Live System
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded bg-gradient-to-br ${product.color} bg-opacity-20 text-white`}>
                                    <product.icon size={24} />
                                </div>
                                <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">{product.domain}</span>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                {product.description}
                                {/* Add more detailed mock description if needed since original data is short */}
                                <span className="block mt-4 text-slate-500 text-base">
                                    Engineered to provide robust solutions with a focus on user experience and performance.
                                </span>
                            </p>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Target size={16} className="text-cyan-500" /> Roadmap Intent
                                </h4>
                                <ul className="space-y-2 text-slate-400 text-sm font-mono border-l border-slate-800 pl-4">
                                    <li>• Deployment of v2.0 features</li>
                                    <li>• Enhanced mobile responsiveness</li>
                                    <li>• Integration with RSMK global account system</li>
                                </ul>
                            </div>

                            <a
                                href={product.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors border-b border-cyan-500/30 hover:border-white pb-1"
                            >
                                Launch Platform <ExternalLink size={16} />
                            </a>
                        </div>
                    </section>
                ))}

                {/* Future Systems */}
                <section className="border-t border-slate-800 pt-16">
                    <h2 className="text-2xl font-bold text-slate-500 mb-8 uppercase tracking-widest">Future Systems</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-dashed border-slate-800 bg-slate-900/20">
                            <h3 className="text-xl font-bold text-slate-300 mb-2">Project: NEURAL_MIND</h3>
                            <p className="text-slate-500 mb-4">Advanced LLM integration for automated code refactoring.</p>
                            <div className="items-center inline-flex gap-2 px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">
                                IN DEVELOPMENT
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-dashed border-slate-800 bg-slate-900/20">
                            <h3 className="text-xl font-bold text-slate-300 mb-2">Project: GREEN_GRID</h3>
                            <p className="text-slate-500 mb-4">IoT network for decentralized solar energy monitoring.</p>
                            <div className="items-center inline-flex gap-2 px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">
                                RESEARCH PHASE
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <HoverFooter />
        </div>
    );
}
