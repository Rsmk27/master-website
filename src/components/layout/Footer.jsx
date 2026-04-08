import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link to="/" className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4 block">
                            RSMK<span className="text-primary">.</span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                            Showcase of embedded systems, IoT, power electronics, electrical machines, and AI-assisted engineering skills.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Explore</h3>
                        <ul className="space-y-3">
                            <li><Link to="/#overview" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Overview</Link></li>
                            <li><Link to="/#work" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Work</Link></li>
                            <li><Link to="/#skills" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Skills</Link></li>
                            <li><Link to="/#contact" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">GitHub</a></li>
                            <li><a href="https://its.rsmk.me" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Personal Site</a></li>
                            <li><a href="https://blogs.rsmk.me" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">External Blog</a></li>
                            <li><Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Project Archive</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Connect</h3>
                        <ul className="space-y-3">
                            <li className="text-slate-600 dark:text-slate-400">rsmk.technologies@rsmk.co.in</li>
                            <li className="text-slate-600 dark:text-slate-400">Open to collaborations and project discussions</li>
                            <li className="text-slate-600 dark:text-slate-400">Based in India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        &copy; {year} RSMK. Built and maintained by Srinivas.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/projects" className="text-slate-400 hover:text-primary transition-colors">Project Archive</Link>
                        <Link to="/blog" className="text-slate-400 hover:text-primary transition-colors">Build Notes</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
