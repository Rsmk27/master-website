import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Cpu, Bot, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/Rsmk27", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/rsmktech", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/SrinivasManik20", label: "Twitter" },
        { icon: Mail, href: "mailto:rsmk.technologies@rsmk.co.in", label: "Email" }
    ];

    const exploreLinks = [
        { name: 'Overview', path: '/#overview' },
        { name: 'AI Division', path: '/#ai-division' },
        { name: 'Selected Work', path: '/#work' },
        { name: 'Technical Divisions', path: '/#skills' }
    ];

    const resourcesLinks = [
        { name: 'Project Archive', path: '/projects' },
        { name: 'Build Notes', path: '/blog' },
        { name: 'Mani AI Chat', path: '/chat' },
        { name: 'About Our Team', path: '/about-us' }
    ];

    const engineeringDivisions = [
        { name: 'Embedded Hardware', icon: Cpu },
        { name: 'Internet of Things', icon: Bot },
        { name: 'Power Simulations', icon: Sparkles }
    ];

    return (
        <footer className="relative bg-slate-50/80 dark:bg-slate-950/85 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800/80 pt-16 pb-28 md:pb-12 overflow-hidden transition-colors duration-300">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-75"></div>

            <div className="container-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="group flex items-center gap-3 w-fit">
                            <img src="/logo-v2.png" alt="RSMK Logo" className="w-9 h-9 rounded group-hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-secondary dark:text-white tracking-tight leading-none font-heading">
                                    RSMK<span className="text-primary">.</span>
                                </span>
                                <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-none mt-1 font-sans">Technologies</span>
                            </div>
                        </Link>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                            Engineering real-world systems: from microcontrollers and hardware telemetry to robust web platforms and intelligent agents.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/50 dark:hover:text-cyan-400 dark:hover:border-cyan-500/30 hover:shadow-md transition-all group"
                                >
                                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore column */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans">Explore</h4>
                        <ul className="space-y-2.5">
                            {exploreLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors group"
                                    >
                                        <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary dark:text-cyan-400" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources column */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans">Resources</h4>
                        <ul className="space-y-2.5">
                            {resourcesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors group"
                                    >
                                        <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary dark:text-cyan-400" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisions column */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans">Divisions</h4>
                        <div className="space-y-3">
                            {engineeringDivisions.map((div) => (
                                <div 
                                    key={div.name}
                                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary dark:text-cyan-400 flex items-center justify-center">
                                        <div.icon size={16} />
                                    </div>
                                    <span className="text-xs font-semibold font-sans">{div.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-slate-200/85 dark:border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-0 font-light">
                        &copy; {year} RSMK Technologies. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 font-mono">
                            <ShieldCheck size={14} className="text-emerald-500 animate-pulse" />
                            <span>Systems Active</span>
                        </div>
                        
                        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800/80 hidden sm:block"></div>
                        
                        <div className="flex gap-4">
                            <Link to="/projects" className="text-xs text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Archive</Link>
                            <Link to="/blog" className="text-xs text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Build Notes</Link>
                            <Link to="/privacy" className="text-xs text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Privacy</Link>
                            <Link to="/terms" className="text-xs text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
