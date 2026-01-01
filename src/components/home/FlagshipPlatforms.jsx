import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/ecosystem';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function FlagshipPlatforms() {
    const flagships = projects.filter(p => p.type === 'Flagship');

    return (
        <section className="py-24 bg-slate-900/20 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">Our Core Products</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Flagship Platforms</h2>
                    </div>
                    <a href="/products" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-mono transition-colors">
                        VIEW ALL PRODUCTS <ArrowRight size={16} />
                    </a>
                </div>

                <div className="space-y-12">
                    {flagships.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-slate-950/50 rounded-3xl p-6 md:p-12 border border-white/5 hover:border-cyan-500/20 transition-all duration-500"
                        >
                            {/* Image Side */}
                            <div className={`relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                        Coming Soon
                                    </div>
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            </div>

                            {/* Content Side */}
                            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded bg-gradient-to-br ${project.color} bg-opacity-10 text-white`}>
                                        <project.icon size={24} />
                                    </div>
                                    <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">{project.domain}</span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-3 bg-white text-slate-950 font-bold rounded hover:bg-cyan-400 transition-colors flex items-center gap-2"
                                    >
                                        Launch Platform <ExternalLink size={18} />
                                    </a>
                                    <a
                                        href="/products"
                                        className="px-6 py-3 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-colors"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
