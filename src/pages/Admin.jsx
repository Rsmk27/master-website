import React, { useState, useEffect } from 'react';
import { Lock, Trash2, Calendar, User, Mail, MessageSquare } from 'lucide-react';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Load messages from local storage
        const storedMessages = JSON.parse(localStorage.getItem('rsmk_contact_messages') || '[]');
        setMessages(storedMessages);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'RSMK.tech') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Access Denied: Invalid Credentials');
        }
    };

    const handleDelete = (id) => {
        const updatedMessages = messages.filter(msg => msg.id !== id);
        setMessages(updatedMessages);
        localStorage.setItem('rsmk_contact_messages', JSON.stringify(updatedMessages));
    };

    const clearAll = () => {
        if (confirm('Are you sure you want to delete ALL messages?')) {
            setMessages([]);
            localStorage.setItem('rsmk_contact_messages', '[]');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center bg-slate-950 px-6">
                <div className="max-w-md w-full bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-cyan-500">
                            <Lock size={32} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">Restricted Area</h2>
                    <p className="text-slate-400 text-center mb-8">Enter security clearance code to proceed.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Access Code"
                            className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none font-mono"
                        />
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded shadow-lg shadow-cyan-900/20 transition-all"
                        >
                            AUTHENTICATE
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Command Center</h1>
                        <p className="text-slate-400">Incoming Transmissions & Inquiries</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={clearAll}
                            className="px-4 py-2 border border-red-500/30 text-red-400 rounded hover:bg-red-500/10 transition-colors flex items-center gap-2"
                        >
                            <Trash2 size={18} /> Clear Database
                        </button>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="px-4 py-2 border border-slate-700 text-slate-300 rounded hover:bg-slate-800 transition-colors"
                        >
                            Log Out
                        </button>
                    </div>
                </div>

                {messages.length === 0 ? (
                    <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                        <MessageSquare className="mx-auto text-slate-700 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-slate-500">No Messages Received</h3>
                        <p className="text-slate-600">Waiting for transmission data...</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {messages.map((msg) => (
                            <div key={msg.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <User size={18} className="text-cyan-500" />
                                            {msg.name}
                                        </h3>
                                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                                            <span className="flex items-center gap-1">
                                                <Mail size={14} /> {msg.email}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} /> {msg.date}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(msg.id)}
                                        className="text-slate-500 hover:text-red-400 p-2 hover:bg-red-500/10 rounded transition-colors self-end md:self-start"
                                        title="Delete Message"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="bg-slate-950 p-4 rounded border border-slate-800/50 text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
