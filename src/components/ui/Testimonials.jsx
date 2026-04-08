import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'John Doe',
        role: 'CTO, Tech Corp',
        image: '/api/placeholder/100/100',
        content: 'RSMK Technologies transformed our vision into reality with their exceptional technical expertise and innovative solutions.',
        rating: 5,
    },
    {
        name: 'Sarah Johnson',
        role: 'Founder, GreenEnergy Solutions',
        image: '/api/placeholder/100/100',
        content: 'Their power electronics and monitoring systems transformed our energy operations. Outstanding work from concept to deployment!',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Product Manager, StartupX',
        image: '/api/placeholder/100/100',
        content: 'Working with RSMK was seamless. They delivered beyond expectations with cutting-edge technology solutions.',
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'CEO, EduTech Inc',
        image: '/api/placeholder/100/100',
        content: 'The engineering workflow platform they built is phenomenal. Project clarity and delivery have improved dramatically!',
        rating: 5,
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-slate-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-slate-400">
                        Don't just take our word for it
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Main Testimonial */}
                    <div className="min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-3xl"
                            >
                                <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 md:p-12">
                                    {/* Quote Icon */}
                                    <svg
                                        className="w-12 h-12 text-cyan-500/30 mb-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>

                                    {/* Content */}
                                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 italic">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Rating */}
                                    <StarRating rating={testimonials[currentIndex].rating} />

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                                            {testimonials[currentIndex].name.charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-white font-semibold text-lg">
                                                {testimonials[currentIndex].name}
                                            </p>
                                            <p className="text-cyan-400">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-cyan-400 transition-all hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-cyan-500 w-8'
                                            : 'bg-slate-700 hover:bg-slate-600'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-cyan-400 transition-all hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Auto-play indicator */}
                    <p className="text-center text-slate-600 text-sm mt-6">
                        Use arrow keys to navigate
                    </p>
                </div>
            </div>
        </section>
    );
}
