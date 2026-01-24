import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4 block">
                            RSMK<span className="text-primary">.</span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                            Empowering businesses with future-ready technology solutions. From AI & IoT to enterprise software, we engineer success.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/software-development" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Software Development</Link></li>
                            <li><Link to="/services/iot-embedded-systems" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">IoT & Embedded Systems</Link></li>
                            <li><Link to="/services/ai-automation" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">AI & Automation</Link></li>
                            <li><Link to="/services/consulting" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Tech Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about-us" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Insights</Link></li>
                            <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary dark:text-white font-heading">Connect</h3>
                        <ul className="space-y-3">
                            <li className="text-slate-600 dark:text-slate-400">info@rsmk.co.in</li>
                            <li className="text-slate-600 dark:text-slate-400">+91 123 456 7890</li>
                            <li className="text-slate-600 dark:text-slate-400">Bangalore, India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        &copy; {year} RSMK Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
