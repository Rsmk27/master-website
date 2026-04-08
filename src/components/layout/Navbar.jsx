import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Layers, Cpu, Mail, BookOpen, Code2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        const sectionIds = ['overview', 'work', 'skills', 'contact'];

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 140;
            let currentSection = 'overview';

            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    const onePageLinks = [
        { name: 'Overview', path: '/#overview', icon: Code2 },
        { name: 'Work', path: '/#work', icon: Layers },
        { name: 'Skills', path: '/#skills', icon: Cpu },
        { name: 'Connect', path: '/#contact', icon: Mail },
    ];

    const routeLinks = [
        { name: 'Projects', path: '/projects', icon: Layers },
        { name: 'Build Notes', path: '/blog', icon: BookOpen },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
            <div className="container-padding h-20 flex items-center justify-between">
                {/* Brand */}
                <NavLink to="/" className="group flex items-center gap-3">
                    <img src="/logo-v2.png" alt="RSMK Logo" className="w-10 h-10 rounded group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-secondary dark:text-white tracking-tight leading-none font-heading">RSMK</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-none">Builder Portfolio</span>
                    </div>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {onePageLinks.map((link) => {
                        const sectionId = link.path.split('#')[1];
                        const isActive = activeSection === sectionId;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-primary font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {routeLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-400'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-black/95 backdrop-blur-xl absolute top-20 left-0 w-full shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {onePageLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium p-3 rounded-lg flex items-center gap-3 transition-colors text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </Link>
                            ))}

                            {routeLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium p-3 rounded-lg flex items-center gap-3 transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`
                                    }
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
