import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Sparkles } from 'lucide-react';
import ManiChat from '@/components/home/ManiChat';

export default function Chat() {
    return (
        <div className="min-h-screen pt-24 pb-12 md:pb-20 container-padding flex flex-col justify-center">
            <SEO 
                title="Chat with Mani AI" 
                description="Engage with Mani, the conversational AI assistant of RSMK Technologies. Ask about our IoT devices, embedded systems, software services, or core platforms." 
                keywords="Mani AI, chatbot, RSMK Technologies, artificial intelligence, client helper" 
                url="/chat" 
            />

            <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center">
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

                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-secondary dark:text-white mb-3 tracking-tight flex items-center justify-center gap-3">
                        <Bot size={40} className="text-primary animate-pulse" />
                        Chat with Mani AI
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Get instant support and answers regarding our engineering services, technical designs, and active products.
                    </p>
                </div>

                {/* The Chat Console */}
                <div className="w-full">
                    <ManiChat />
                </div>
            </div>
        </div>
    );
}
