import React from 'react';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';
import HoverFooter from '@/components/demo/HoverFooter';
import SEO from '@/components/common/SEO';

export default function Contact() {
    return (
        <div className="min-h-screen pt-24">
            <SEO title="Contact Us" description="Get in touch with RSMK Technologies for project partnerships and research discussions." />
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Contact & Collaboration</h1>
                <p className="text-slate-400 text-lg mb-12">
                    Professional inquiries, project partnerships, and research discussions.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Mail className="text-cyan-500" /> Email
                        </h3>
                        <a href="mailto:rsmk.technologies@rsmk.co.in" className="text-2xl text-slate-200 hover:text-cyan-400 transition-colors font-mono break-all">
                            rsmk.technologies@rsmk.co.in
                        </a>
                        <p className="text-slate-500 mt-2 text-sm">For all official correspondence.</p>
                    </div>

                    <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6">Social Channels</h3>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/company/rsmktech" className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition-all group">
                                <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
                                <span>LinkedIn Page</span>
                            </a>
                            <a href="https://github.com/Rsmk27" className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition-all group">
                                <Github className="text-white group-hover:scale-110 transition-transform" />
                                <span>GitHub Repositories</span>
                            </a>
                            <a href="https://x.com/SrinivasManik20" className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition-all group">
                                <Twitter className="text-sky-500 group-hover:scale-110 transition-transform" />
                                <span>X (Twitter)</span>
                            </a>
                            <a href="https://t.me/RSMK_27" className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition-all group">
                                <Send className="text-blue-400 group-hover:scale-110 transition-transform" />
                                <span>Telegram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <HoverFooter />
        </div>
    );
}
