import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import EngineeringDomains from '@/components/home/EngineeringDomains';
import FlagshipPlatforms from '@/components/home/FlagshipPlatforms';
import HoverFooter from '@/components/demo/HoverFooter';

export default function Home() {
    // Ensure we scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-950">
            <Hero />

            <div className="relative z-10 bg-slate-950">
                {/* Introduction / About Preview */}
                <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-mono text-cyan-500 mb-6 uppercase tracking-widest">The Command Center</h2>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                        We unify diverse engineering disciplines under one authoritative brand.
                        From <span className="text-white font-medium">smart energy systems</span> to <span className="text-white font-medium">next-gen software</span>,
                        RSMK Technologies is the foundation for a sustainable and intelligent future.
                    </p>
                </section>

                <EngineeringDomains />
                <FlagshipPlatforms />

                {/* Live Ecosystem Map Preview / CTA */}
                <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Explore the Grid</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Access the live ecosystem map of all projects, prototypes, and operational systems.</p>
                    <a href="/ecosystem" className="inline-block px-10 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold rounded hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all">
                        View Master Directory
                    </a>
                </section>

                <HoverFooter />
            </div>
        </main>
    );
}
