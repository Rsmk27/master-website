import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, duration = 2, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, isInView]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { value: 100, suffix: '+', label: 'Happy Clients', icon: '😊' },
    { value: 10, suffix: '+', label: 'Technology Domains', icon: '⚡' },
    { value: 99, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

export default function Stats() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built on Excellence
                    </h2>
                    <p className="text-xl text-slate-400">
                        Numbers that speak for themselves
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                                {/* Icon */}
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <p className="text-slate-400 font-medium text-lg">
                                    {stat.label}
                                </p>

                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
