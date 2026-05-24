import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2, RefreshCw, MessageSquare } from 'lucide-react';

const SUGGESTIONS = [
    "Who is Mani?",
    "Tell me about RSMK Technologies.",
    "What is Budget Buddy?",
    "Tell me about SFMD project."
];

// Helper function to safely format basic markdown
const formatMarkdown = (text) => {
    if (!text) return '';
    const lines = text.split('\n');
    return lines.map((line, idx) => {
        let processedLine = line;
        
        // Headings
        if (line.startsWith('## ')) {
            return (
                <h4 key={idx} className="text-base font-bold text-slate-800 dark:text-white mt-4 mb-2 first:mt-0">
                    {line.replace('## ', '')}
                </h4>
            );
        }
        if (line.startsWith('# ')) {
            return (
                <h3 key={idx} className="text-lg font-bold text-slate-800 dark:text-white mt-5 mb-3 first:mt-0">
                    {line.replace('# ', '')}
                </h3>
            );
        }
        
        let html = line;
        // Bold formatting (**text**)
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
        
        // Link formatting ([text](url))
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-cyan-400 hover:underline font-semibold">$1</a>');
        
        // Bullet points (* or -)
        if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
            const content = html.trim().substring(2);
            return (
                <li key={idx} className="ml-4 list-disc text-slate-600 dark:text-slate-300 mb-1" dangerouslySetInnerHTML={{ __html: content }} />
            );
        }
        
        // Empty lines
        if (html.trim() === '') {
            return <div key={idx} className="h-2" />;
        }
        
        // Regular paragraphs
        return (
            <p key={idx} className="mb-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm last:mb-0" dangerouslySetInnerHTML={{ __html: html }} />
        );
    });
};

export default function ManiChat() {
    const [messages, setMessages] = useState([
        {
            sender: 'mani',
            text: "Hello! I am **Mani**, the official AI assistant of **RSMK Technologies**. Ask me anything about our IoT devices, embedded systems, software services, or core platforms. How can I help you today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [coldStartNotice, setColdStartNotice] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to the bottom of the chat console
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = async (textToSend) => {
        const queryText = textToSend || input;
        if (!queryText.trim() || loading) return;

        // Reset input field
        if (!textToSend) setInput('');

        // Append user message to history
        const userMessage = {
            sender: 'user',
            text: queryText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);
        setColdStartNotice(false);

        // Timer to trigger the cold-start notice if the server takes more than 3 seconds to respond
        const coldStartTimer = setTimeout(() => {
            setColdStartNotice(true);
        }, 3000);

        try {
            const response = await fetch('https://project-mani-c0t3.onrender.com/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: queryText })
            });

            clearTimeout(coldStartTimer);
            setColdStartNotice(false);

            if (!response.ok) {
                throw new Error("Failed to communicate with Mani API.");
            }

            const data = await response.json();
            
            if (data.success) {
                setMessages(prev => [...prev, {
                    sender: 'mani',
                    text: data.response,
                    timestamp: new Date(),
                    model: data.model
                }]);
            } else {
                throw new Error(data.error || "An unknown response error occurred.");
            }
        } catch (err) {
            console.error("Mani API Error:", err);
            setMessages(prev => [...prev, {
                sender: 'mani',
                text: "⚠️ **System Communication Issue:** I couldn't reach my core brains. The RSMK AI Division server might be updating or cold-starting. Please try again in a few moments.",
                timestamp: new Date()
            }]);
        } finally {
            clearTimeout(coldStartTimer);
            setColdStartNotice(false);
            setLoading(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        handleSend(suggestion);
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300">
            {/* Chatbot Header */}
            <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                        <Bot size={22} className="animate-pulse" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-950 rounded-full"></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white text-sm font-heading flex items-center gap-1.5">
                            Mani AI Assistant
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">v1.0.0</span>
                        </h3>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                            Motto: "AI for easy life"
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">llama-3.3-70b-versatile</span>
                    <Sparkles size={16} className="text-primary animate-pulse" />
                </div>
            </div>

            {/* Message Pane */}
            <div className="h-[420px] overflow-y-auto p-6 bg-slate-50/50 dark:bg-slate-950/20 space-y-4">
                <AnimatePresence initial={false}>
                    {messages.map((msg, index) => {
                        const isMani = msg.sender === 'mani';
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex gap-3 max-w-[85%] ${isMani ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    isMani ? 'bg-primary text-white shadow-md' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                }`}>
                                    {isMani ? <Bot size={16} /> : <User size={16} />}
                                </div>
                                <div className="space-y-1">
                                    <div className={`p-4 rounded-2xl shadow-sm border ${
                                        isMani 
                                            ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-100 dark:border-slate-800/80 rounded-tl-none' 
                                            : 'bg-primary text-white border-transparent rounded-tr-none'
                                    }`}>
                                        {isMani ? (
                                            <div>{formatMarkdown(msg.text)}</div>
                                        ) : (
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                        )}
                                    </div>
                                    <div className={`text-[10px] text-slate-400 dark:text-slate-500 px-1 ${
                                        isMani ? 'text-left' : 'text-right'
                                    }`}>
                                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        {isMani && msg.model && <span className="ml-2 font-mono">• {msg.model}</span>}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {loading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 max-w-[80%] mr-auto"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 animate-spin">
                                <Loader2 size={16} />
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-center gap-3">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    {coldStartNotice 
                                        ? "Mani Core is cold-starting on Render (may take 20-30s)..." 
                                        : "Mani is thinking..."}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Prompts */}
            {messages.length === 1 && !loading && (
                <div className="px-6 py-3 bg-slate-50/30 dark:bg-slate-950/10 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
                        <MessageSquare size={12} /> Suggestions:
                    </span>
                    {SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-cyan-500/50 px-3 py-1.5 rounded-full transition-all shadow-sm hover:shadow-md"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Form */}
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                }} 
                className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3"
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Mani anything about RSMK Technologies..."
                    disabled={loading}
                    className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-cyan-500 transition-all disabled:opacity-60"
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="bg-primary hover:bg-blue-700 text-white font-bold p-3 rounded-xl transition-all shadow-md shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
            </form>

            {/* Render Server Sleep Notice */}
            <div className="bg-slate-100 dark:bg-slate-950/60 px-6 py-2 border-t border-slate-200 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 text-center font-sans tracking-wide">
                ℹ️ Mani's engine runs on Render. It goes to sleep during inactivity and may take up to 35 seconds to warm up on your first query.
            </div>
        </div>
    );
}
