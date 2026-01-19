import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 2000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[200]"
                >
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                        {/* Icon */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    We use cookies
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking "Accept", you consent to our use of cookies.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors"
                            >
                                Decline
                            </button>
                        </div>

                        {/* Learn more link */}
                        <p className="text-xs text-slate-500 mt-4 text-center">
                            <a href="/privacy" className="hover:text-cyan-400 transition-colors">
                                Learn more about our privacy policy
                            </a>
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
