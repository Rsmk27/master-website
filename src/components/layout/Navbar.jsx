import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe, Layers, Cpu, Users, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Products', path: '/products', icon: Layers },
        { name: 'Domains', path: '/domains', icon: Cpu },
        { name: 'Ecosystem', path: '/ecosystem', icon: Globe },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <NavLink to="/" className="group flex items-center gap-3">
                    <img src="/logo-v2.png" alt="RSMK Logo" className="w-10 h-10 rounded group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-cyan-400 transition-colors">RSMK</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] leading-none">Technologies</span>
                    </div>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:text-cyan-400 ${isActive ? 'text-cyan-400' : 'text-slate-400'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
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
                        className="md:hidden border-t border-slate-800 bg-black/95 backdrop-blur-xl h-[calc(100vh-5rem)] fixed top-20 left-0 w-full z-40 overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium p-3 rounded-lg flex items-center gap-3 transition-colors ${isActive ? 'bg-cyan-950/30 text-cyan-400' : 'text-slate-400 hover:bg-slate-900'
                                        }`
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
