import React, { useEffect } from 'react';
import { domains, projects } from '@/data/ecosystem';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useLocation } from 'react-router-dom';
import HoverFooter from '@/components/demo/HoverFooter';

export default function Domains() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h1 className="text-4xl font-bold text-white mb-6">Engineering Domains</h1>
                <p className="text-slate-400 text-lg max-w-3xl">
                    RSMK Technologies is organized into specialized research and development sectors.
                    Each domain operates with specific goals and technical competencies.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-24 pb-24">
                {domains.map((domain, index) => {
                    const domainProjects = projects.filter(p => p.domain === domain.name);
                    const Icon = domain.icon;

                    return (
                        <section key={domain.id} id={domain.id} className="scroll-mt-28 border-l-2 border-slate-800 pl-8 relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-900 rounded-lg text-cyan-500">
                                    <Icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white">{domain.name}</h2>
                            </div>

                            <p className="text-slate-400 leading-relaxed max-w-2xl mb-8">
                                Focused on developing robust solutions within the scope of {domain.name.toLowerCase()}.
                                This division handles everything from initial prototyping to full-scale deployment
                                of relevant technologies.
                            </p>

                            {domainProjects.length > 0 ? (
                                <div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Active Projects</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {domainProjects.map((p, i) => (
                                            <ProjectCard key={i} project={p} index={i} />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-6 bg-slate-900/30 rounded border border-dashed border-slate-800 text-slate-500 font-mono text-sm">
                                    No public projects active in this domain currently.
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>

            <HoverFooter />
        </div>
    );
}
