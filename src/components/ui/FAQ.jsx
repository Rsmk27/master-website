import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What services does RSMK Technologies offer?',
        answer: 'We provide focused engineering solutions in embedded hardware, IoT systems, power electronics, electrical machines, programming languages, and AI-assisted applications.',
    },
    {
        question: 'How can I get started with your products?',
        answer: 'You can explore our products page to find the solution that fits your needs, then contact us through our contact form or email for a personalized consultation.',
    },
    {
        question: 'Do you offer custom development services?',
        answer: 'Yes! We specialize in custom software development, hardware prototyping, and system integration tailored to your specific requirements.',
    },
    {
        question: 'What makes RSMK Technologies different?',
        answer: 'We bridge hardware and software expertise under one roof, offering end-to-end solutions from concept to deployment with a focus on sustainability and innovation.',
    },
    {
        question: 'How can I collaborate or partner with RSMK?',
        answer: 'We welcome collaborations! Reach out through our contact page with your proposal, and our team will get back to you within 24-48 hours.',
    },
];

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="border-b border-slate-800 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-slate-800/30 transition-colors group"
            >
                <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors pr-8">
                    {faq.question}
                </span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-cyan-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </motion.svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-slate-300 leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 px-6 bg-slate-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-400">
                        Everything you need to know about RSMK Technologies
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-2xl overflow-hidden"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-400 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
