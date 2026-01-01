import React, { useState, useMemo } from 'react';
import { projects, domains } from '@/data/ecosystem';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Search, Filter, Globe } from 'lucide-react';
import HoverFooter from '@/components/demo/HoverFooter';

export default function Ecosystem() {
    const [search, setSearch] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('All');

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase());
            const matchesDomain = selectedDomain === 'All' || project.domain === selectedDomain;

            return matchesSearch && matchesDomain;
        });
    }, [search, selectedDomain]);

    return (
        <div className="min-h-screen bg-slate-950 pt-24">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <Globe className="text-cyan-500" size={32} />
                    <h1 className="text-4xl font-bold text-white">Ecosystem Grid</h1>
                </div>
                <p className="text-slate-400 text-lg max-w-2xl mb-12">
                    The complete master directory of all RSMK Technologies projects, prototypes, and operational systems.
                </p>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-6 bg-slate-900/50 p-6 rounded-xl border border-white/5">
                    {/* Search */}
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search protocols, systems, or ID..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        <button
                            onClick={() => setSelectedDomain('All')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedDomain === 'All'
                                    ? 'bg-cyan-600 text-white'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            All Systems
                        </button>
                        {domains.map(d => (
                            <button
                                key={d.id}
                                onClick={() => setSelectedDomain(d.name)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedDomain === d.name
                                        ? 'bg-cyan-600 text-white'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                    }`}
                            >
                                {d.name.split(' & ')[0]} {/* Shorten name for tab */}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-24 text-slate-500">
                        No systems found matching your query.
                    </div>
                )}
            </div>

            <HoverFooter />
        </div>
    );
}
