import React from 'react';
import { motion } from 'framer-motion';
import { domains } from '@/data/ecosystem';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EngineeringDomains() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering Domains</h2>
                    <div className="h-1 w-20 bg-cyan-500 mb-6"></div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Our organized divisions of technology. From embedded systems to advanced AI research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map((domain, index) => {
                        const Icon = domain.icon;
                        return (
                            <motion.div
                                key={domain.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 p-4 bg-slate-950 rounded-lg w-fit border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                                        <Icon size={32} className="text-cyan-500" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {domain.name}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                                        Specialized research and development division focused on {domain.name.toLowerCase()} solutions.
                                    </p>

                                    <Link
                                        to={`/domains#${domain.id}`}
                                        className="flex items-center gap-2 text-cyan-500 text-sm font-semibold tracking-wide uppercase group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Explore Division <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
