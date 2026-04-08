import React, { useEffect } from 'react';
import { domains, projects } from '@/data/ecosystem';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useLocation } from 'react-router-dom';
import HoverFooter from '@/components/demo/HoverFooter';
import SEO from '@/components/common/SEO';

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
            <SEO title="Engineering Skills" description="A focused showcase of embedded systems, IoT, power systems, power electronics, electrical machines, and AI-assisted development skills." />
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h1 className="text-4xl font-bold text-white mb-6">Engineering Skills</h1>
                <p className="text-slate-400 text-lg max-w-3xl">
                    A compact overview of the exact technical capabilities supported by the website, with no unrelated disciplines included.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-24 pb-24">
                {domains.map((domain) => {
                    const Icon = domain.icon;

                    return (
                        <section key={domain.id} id={domain.id} className="scroll-mt-28 border-l-2 border-slate-800 pl-8 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-900 rounded-lg text-cyan-500">
                                    <Icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white">{domain.name}</h2>
                            </div>

                            <p className="text-slate-400 leading-relaxed max-w-2xl mb-8">
                                Core capabilities for {domain.name.toLowerCase()}, presented as a single focused skill set.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {domain.skills.map((skill) => (
                                    <div key={skill} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
                                        <p className="text-slate-100 font-medium">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            <HoverFooter />
        </div>
    );
}
