import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen pt-24 pb-20 container-padding">
            <Helmet>
                <title>Contact Us | RSMK Technologies - Partnerships & Inquiries</title>
                <meta name="description" content="Connect with RSMK Technologies for software development services, consulting, and engineering partnerships." />
            </Helmet>

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-secondary dark:text-white mb-6">Contact & Collaboration</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Ready to start your next project? Reach out for professional inquiries, technology consulting, and partnerships.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center md:text-left transition-colors">
                        <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                            <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-primary"><Mail size={24} /></div>
                            Email Us
                        </h3>
                        <a href="mailto:rsmk.technologies@rsmk.co.in" className="text-lg md:text-xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-mono break-all mb-2">
                            rsmk.technologies@rsmk.co.in
                        </a>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">For all official correspondence and inquiries.</p>
                    </div>

                    <div className="glass-panel p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                        <h3 className="text-xl font-bold text-secondary dark:text-white mb-6">Connect on Social</h3>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/company/rsmktech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 p-3 rounded-lg transition-all group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                <Linkedin className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">LinkedIn Page</span>
                            </a>
                            <a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 p-3 rounded-lg transition-all group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                <Github className="text-slate-800 dark:text-white group-hover:scale-110 transition-transform" />
                                <span className="font-medium">GitHub Repositories</span>
                            </a>
                            <a href="https://x.com/SrinivasManik20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 p-3 rounded-lg transition-all group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                <Twitter className="text-sky-500 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">X (Twitter)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
