import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const searchData = [
    { title: 'Home', path: '/', description: 'RSMK Technologies homepage' },
    { title: 'About', path: '/about', description: 'Learn about our vision and mission' },
    { title: 'Products', path: '/products', description: 'Explore our technology solutions' },
    { title: 'Domains', path: '/domains', description: 'Engineering domains we specialize in' },
    { title: 'Ecosystem', path: '/ecosystem', description: 'Interactive ecosystem map' },
    { title: 'Contact', path: '/contact', description: 'Get in touch with us' },
    // Add more searchable content as needed
];

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Keyboard shortcut (Ctrl+K or Cmd+K)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Search logic
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = searchData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
    }, [query]);

    const handleSelect = (path) => {
        navigate(path);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all group"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <span className="hidden md:block">Search</span>
                <kbd className="hidden md:block px-2 py-0.5 bg-slate-700/50 border border-slate-600 rounded text-xs">
                    ⌘K
                </kbd>
            </button>

            {/* Search Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        />

                        {/* Modal */}
                        <div className="fixed inset-0 flex items-start justify-center pt-[15vh] z-[101] px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                            >
                                {/* Search Input */}
                                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-800">
                                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search pages, products, domains..."
                                        className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-lg"
                                    />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-500 hover:text-slate-300"
                                    >
                                        <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs">
                                            ESC
                                        </kbd>
                                    </button>
                                </div>

                                {/* Results */}
                                <div className="max-h-[400px] overflow-y-auto">
                                    {results.length === 0 && query !== '' && (
                                        <div className="py-12 text-center text-slate-500">
                                            <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <p>No results found for "{query}"</p>
                                        </div>
                                    )}

                                    {results.length === 0 && query === '' && (
                                        <div className="py-12 text-center text-slate-500">
                                            <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                            <p>Type to search...</p>
                                        </div>
                                    )}

                                    {results.map((result, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelect(result.path)}
                                            className="w-full flex items-start gap-4 px-6 py-4 hover:bg-slate-800/50 transition-colors text-left group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">
                                                    {result.title}
                                                </p>
                                                <p className="text-sm text-slate-400">
                                                    {result.description}
                                                </p>
                                            </div>
                                            <svg className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>

                                {/* Footer */}
                                {results.length > 0 && (
                                    <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/50 text-xs text-slate-500 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-2">
                                                <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">↑</kbd>
                                                <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">↓</kbd>
                                                <span>to navigate</span>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">↵</kbd>
                                                <span>to select</span>
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
