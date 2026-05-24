import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen pt-24 pb-12 md:pb-20 container-padding flex flex-col justify-center">
            <SEO 
                title="Privacy Policy" 
                description="Read the Privacy Policy for RSMK Technologies to understand how we manage system data and software analytics." 
                keywords="Privacy Policy, RSMK Technologies, data management, privacy guidelines" 
                url="/privacy" 
            />

            <div className="max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Homepage
                    </Link>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <ShieldCheck size={14} className="text-emerald-500" />
                        <span>Policy Verified</span>
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <h1 className="text-3xl sm:text-4xl font-bold font-heading text-secondary dark:text-white mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Last updated: May 24, 2026</p>
                    
                    <hr className="border-slate-200 dark:border-slate-800" />

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-secondary dark:text-white">1. Introduction</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            Welcome to RSMK Technologies ("we," "our," or "us"). We value your privacy and are committed to protecting any system data and communications shared with us. This policy describes our practices regarding information collection, usage, and sharing across our main portfolio site and active software tools.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-secondary dark:text-white">2. Data Collection & Analytics</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            We do not collect sensitive personal identification information. We may process baseline telemetry logs, app installation usage signals (such as for releases of the ColorOhm APK), and anonymized Google Analytics session identifiers to measure layout responsiveness and build note readability.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-secondary dark:text-white">3. Third-Party Integrations & APIs</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            Our interactive assistant, Mani AI, operates via API requests routed to our custom LLM endpoint. Chats processed through the workspace are kept isolated and are purely used for answering questions about the RSMK ecosystem.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-secondary dark:text-white">4. Contact Information</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            For comments or questions regarding this Privacy Policy or our software practices, please reach out to our systems engineering team directly at <a href="mailto:rsmk.technologies@rsmk.co.in" className="text-primary hover:underline">rsmk.technologies@rsmk.co.in</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
