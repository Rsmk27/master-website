import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ManiChat from '@/components/home/ManiChat';
import ManiMascot from '@/components/ManiMascot';

export default function Chat() {
    return (
        <div className="min-h-screen pt-24 pb-12 md:pb-20 container-padding flex flex-col justify-center">
            <SEO 
                title="Chat with Mani AI" 
                description="Engage with Mani, the conversational AI assistant of RSMK Technologies. Ask about our IoT devices, embedded systems, software services, or core platforms." 
                keywords="Mani AI, chatbot, RSMK Technologies, artificial intelligence, client helper" 
                url="/chat" 
            />

            <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col justify-center">
                {/* Back Link & Page Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Homepage
                    </Link>
                    
                    <div className="flex items-center gap-2 self-start sm:self-auto bg-primary/10 dark:bg-cyan-500/10 text-primary dark:text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        <Sparkles size={12} className="animate-pulse" /> AI Workspace
                    </div>
                </div>

                {/* Main Content Layout: Side-by-side on desktop, stacked on mobile */}
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 w-full mt-4">
                    {/* Left Column: Chat Console */}
                    <div className="flex-grow w-full lg:max-w-4xl">
                        <ManiChat />
                    </div>

                    {/* Right Column: Mascot & Info Card */}
                    <div className="w-full lg:w-72 flex flex-col items-center text-center lg:text-left lg:items-start lg:sticky lg:top-28">
                        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
                            <ManiMascot />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-secondary dark:text-white mb-2 tracking-tight">
                            Mani AI
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Mani is our friendly engineering companion. Double-click or drag Mani around to play, or ask questions in the console.
                        </p>
                        
                        {/* Daily Quest Status Card */}
                        <div className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-left">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Daily Quest</span>
                                <span className="text-[9px] bg-primary/15 text-primary dark:text-cyan-400 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                    <Sparkles size={8} /> Active
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                                Open the assistant drawer (click on Mani!) to view daily quests, track achievements, and explore engineering projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
