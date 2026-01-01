import React from 'react';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';
import HoverFooter from '@/components/demo/HoverFooter';

export default function Contact() {
    return (
        <div className="min-h-screen pt-24">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Contact & Collaboration</h1>
                <p className="text-slate-400 text-lg mb-12">
                    Professional inquiries, project partnerships, and research discussions.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Mail className="text-cyan-500" /> Email
                            </h3>
                            <a href="mailto:hello@rsmk.co.in" className="text-2xl text-slate-200 hover:text-cyan-400 transition-colors font-mono">
                                hello@rsmk.co.in
                            </a>
                            <p className="text-slate-500 mt-2 text-sm">For all official correspondence.</p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6">Social Channels</h3>
                            <div className="flex flex-col gap-4">
                                <a href="https://linkedin.com/in/rsmk27/" className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition-all group">
                                    <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
                                    <span>LinkedIn Profile</span>
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

                    {/* Quick Form (Visual only for now if no backend specified, or mailto) */}
                    <div className="bg-slate-900/30 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-mono text-slate-500 mb-1">IDENTITY</label>
                                <input type="text" placeholder="Name or Organization" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-slate-500 mb-1">CONTACT</label>
                                <input type="email" placeholder="Email Address" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-slate-500 mb-1">TRANSMISSION</label>
                                <textarea rows={5} placeholder="Project details or inquiry..." className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none"></textarea>
                            </div>
                            <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded shadow-lg shadow-cyan-900/20 transition-all">
                                ESTABLISH CONTACT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <HoverFooter />
        </div>
    );
}
