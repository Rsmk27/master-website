import React from 'react';
import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/ecosystem';

export default function Projects() {
    return (
        <div className="pt-24 pb-20 container-padding min-h-screen">
            <Helmet>
                <title>Projects | RSMK Technologies - Engineering Case Studies</title>
                <meta name="description" content="Explore our portfolio of successful projects in Software, IoT, AI, and Smart Systems." />
            </Helmet>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white font-heading">Our Projects</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Case studies and solutions delivered across various domains.
                    Real-world applications of our engineering expertise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                        <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="group block h-full">
                            <div className="glass-panel h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                {project.image ? (
                                    <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ) : (
                                    <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <Icon size={48} className="text-slate-300" />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                                            {project.domain}
                                        </span>
                                        <Icon className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white font-heading">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <span className="text-primary text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                                        View Case Study &rarr;
                                    </span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
