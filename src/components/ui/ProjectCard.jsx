import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ExternalLink } from 'lucide-react';

export const ProjectCard = React.memo(({ project, index }) => {
    const IconComponent = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <a href={project.link} target="_blank" rel="noreferrer" className="block h-full group">
                <div
                    className={cn(
                        "h-full rounded-2xl overflow-hidden flex flex-col",
                        "bg-slate-900/40 border border-white/10 shadow-lg",
                        "hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
                        "backdrop-blur-sm"
                    )}
                >
                    {/* Image Section - Fully visible */}
                    <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-slate-800">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={`${project.title} Preview`}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-xs">NO PREVIEW</div>
                        )}

                        {/* Subtle overlay only for depth, not obscuring */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Floating Icon */}
                        <div className={`absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 border border-white/10 backdrop-blur-md shadow-lg`}>
                            <IconComponent className="text-cyan-400" size={20} />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-grow p-5 relative">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                            <span className="text-xs font-medium text-slate-500 font-mono group-hover:text-cyan-400 transition-colors truncate max-w-[60%]">
                                {project.domain}
                            </span>
                            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest ">
                                Visit <ExternalLink size={12} />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
});
ProjectCard.displayName = "ProjectCard";
