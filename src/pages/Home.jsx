import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Bot, Server, Cloud, Workflow, Mail, Github, Linkedin, Zap, Wind } from 'lucide-react';
import { projects, domains } from '@/data/ecosystem';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const spotlightTitles = [
        'ColorOhm App',
        'Firefighter Monitoring Device (SFMD)',
        'Budget Buddy',
        'AI Chatbot',
    ];

    const spotlightProjects = spotlightTitles
        .map((title) => projects.find((project) => project.title === title))
        .filter(Boolean);

    const stack = [
        'C',
        'Embedded C',
        'Assembly',
        'Python',
        'MATLAB',
        'React.js',
        'Next.js',
        'Firebase',
        'Firestore',
        'React Native',
        'Expo',
    ];

    const highlights = [
        {
            title: 'Embedded Systems & Hardware',
            icon: Cpu,
            text: 'ESP32, ESP8266, Arduino, UART, I2C, SPI, MQTT, sensors, and actuators.',
        },
        {
            title: 'Internet of Things',
            icon: Cloud,
            text: 'IoT system design, cloud integration, and live real-time monitoring solutions.',
        },
        {
            title: 'Power Systems & Power Electronics',
            icon: Zap,
            text: 'Power generation, transmission, smart grid, converters, inverters, motor drives, and PWM control.',
        },
        {
            title: 'Electrical Machines',
            icon: Wind,
            text: 'DC & AC machines, transformers, and electrical motor system fundamentals.',
        },
    ];

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Srinivas | Personal Showcase of Skills and Work</title>
                <meta name="description" content="Personal showcase of embedded systems, IoT, power systems, power electronics, electrical machines, and AI-assisted development skills." />
                <meta name="keywords" content="Srinivas portfolio, personal showcase, software projects, embedded systems, AI projects" />
            </Helmet>

            <Hero />

            {/* Work Showcase */}
            <motion.section id="work" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-4">Selected Work</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                                The latest builds that reflect how I solve real technical problems end-to-end.
                            </p>
                        </div>
                        <Link to="/projects" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark mt-4 md:mt-0">
                            Open Full Project Archive <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {spotlightProjects.map((project) => {
                            const Icon = project.icon;
                            return (
                                <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                                    <article className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all h-full">
                                        <div className="h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-lg mb-5">
                                            {project.image ? (
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Icon className="text-slate-400" size={36} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.domain}</span>
                                            <Icon className="text-slate-400 group-hover:text-primary transition-colors" size={18} />
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{project.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                                        <span className="text-primary text-sm font-semibold inline-flex items-center">
                                            Open Project <ArrowRight className="ml-1" size={14} />
                                        </span>
                                    </article>
                                </a>
                            );
                        })}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <Link to="/projects" className="inline-flex items-center text-primary font-semibold">
                            Open Full Project Archive <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Skills */}
            <motion.section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-4">Core Skill Areas</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Focused expertise in embedded systems, IoT, power systems, electrical machines, and AI-assisted development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                    <Icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={36} />
                                    <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white font-heading">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Engineering Domains</h3>
                            <div className="space-y-3">
                                {domains.map((domain) => {
                                    const Icon = domain.icon;
                                    return (
                                        <div key={domain.id} className="flex items-center gap-3">
                                            <Icon size={16} className="text-primary" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">{domain.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div id="stack" className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Current Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 text-sm rounded-full bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Journey */}
            <motion.section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-8 text-center">
                            Build Process
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">01</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Build Fast</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">I start with a working prototype quickly, then refine from real usage.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">02</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Ship Publicly</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Each project has a live link, so you can see outcomes instead of promises.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">03</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Iterate Relentlessly</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">I track what breaks, improve architecture, and keep every build moving forward.</p>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Server className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">System Design</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">I define architecture early so software and device logic scale together.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Cloud className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">Deployment</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Projects are deployed with production-like workflows, not only local demos.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Workflow className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">Continuous Improvement</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">I improve code quality and performance after launch through structured iterations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section id="contact" className="py-24 bg-primary text-white relative overflow-hidden" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Let Us Connect</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        If you want to collaborate, review my work, or discuss a build idea, I am always open to meaningful conversations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="mailto:rsmk.technologies@rsmk.co.in" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-xl">
                            <Mail size={18} /> Email Me
                        </a>
                        <a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/60 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/company/rsmktech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/60 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}

