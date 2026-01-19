import { motion } from 'framer-motion';

const timeline = [
    {
        year: '2020',
        title: 'Foundation',
        description: 'RSMK Technologies was founded with a vision to bridge hardware and software innovation.',
        icon: '🚀',
    },
    {
        year: '2021',
        title: 'First Products',
        description: 'Launched our first suite of IoT solutions and smart energy systems.',
        icon: '⚡',
    },
    {
        year: '2022',
        title: 'Expansion',
        description: 'Expanded into AI tools and educational platforms with Zest Academy.',
        icon: '🎓',
    },
    {
        year: '2023',
        title: 'Innovation Hub',
        description: 'Established RSMK as a complete technology ecosystem with multiple successful deployments.',
        icon: '🌐',
    },
    {
        year: '2024',
        title: 'Global Reach',
        description: 'Serving clients worldwide with cutting-edge technology solutions and sustainable practices.',
        icon: '🌍',
    },
];

export default function Timeline() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Journey
                    </h2>
                    <p className="text-xl text-slate-400">
                        Evolution of innovation and excellence
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
                                        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                                            <span className="text-4xl">{item.icon}</span>
                                            <span className="text-2xl font-bold text-cyan-400">{item.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:block relative">
                                    <div className="w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20 ring-offset-4 ring-offset-slate-950" />
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
