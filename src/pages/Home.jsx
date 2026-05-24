import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import { Helmet } from 'react-helmet-async';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Bot, Server, Cloud, Workflow, Mail, Github, Linkedin, Zap, Wind, Sparkles } from 'lucide-react';
import { projects, domains } from '@/data/ecosystem';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const spotlightTitles = [
        'ColorOhm App',
        'Firefighter Monitoring Device (SFMD)',
        'Budget Buddy',
        'Mani AI Chatbot',
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

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://rsmk.co.in/#organization",
                "name": "RSMK Technologies",
                "url": "https://rsmk.co.in",
                "logo": "https://rsmk.co.in/logo-v2.png",
                "email": "rsmk.technologies@rsmk.co.in",
                "sameAs": [
                    "https://github.com/Rsmk27",
                    "https://www.linkedin.com/company/rsmktech"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://rsmk.co.in/#website",
                "url": "https://rsmk.co.in",
                "name": "RSMK Technologies",
                "description": "Innovative engineering solutions in embedded systems, IoT architecture, power electronics, and artificial intelligence.",
                "publisher": {
                    "@id": "https://rsmk.co.in/#organization"
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://rsmk.co.in/#service",
                "name": "RSMK Technologies Engineering Division",
                "image": "https://rsmk.co.in/logo-v2.png",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                },
                "knowsAbout": [
                    "Embedded Hardware Engineering",
                    "Internet of Things Telemetry",
                    "Power Electronics",
                    "React and React Native Web App Development",
                    "Artificial Intelligence Agent Design"
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen">
            <SEO 
                title="Innovating Systems & Solutions" 
                description="Official website of RSMK Technologies. Providing cutting-edge solutions in embedded systems, IoT architecture, power electronics, and artificial intelligence." 
                keywords="RSMK Technologies, embedded systems, IoT, power electronics, AI division, Mani chatbot, software development" 
                url="/" 
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            </Helmet>

            <Hero />

            {/* RSMK AI Division & Mani Chatbot Showcase */}
            <motion.section 
                id="ai-division" 
                className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800 overflow-hidden" 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <div className="container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-xs font-mono font-bold mb-4 uppercase tracking-wider">
                            <Sparkles size={14} className="animate-pulse" /> RSMK AI Ecosystem
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-secondary dark:text-white mb-4 tracking-tight">
                            Meet Mani AI
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
                            Introducing the central intelligence agent of RSMK Technologies. Custom-built to provide contextual insights about our software, hardware, and engineering ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
                        {/* Left Column: Mani AI Details */}
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white font-heading mb-4">
                                    Intelligent System Assistant
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-light mb-6">
                                    Mani is our context-aware agent developed by the RSMK AI Division. Tuned with deep knowledge of our engineering architectures, firmware guidelines, and custom hardware like the SFMD and BudgetBuddy.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary dark:text-cyan-400">
                                        <Bot size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white text-base">Context-Aware Core</h4>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                                            Retrieves real-time information about project build notes, hardware specifications, and system integration strategies.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary dark:text-cyan-400">
                                        <Workflow size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white text-base">Interactive Architecture Guide</h4>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                                            Helps developers and clients understand how our firmware integrations connect seamlessly with web and mobile dashboards.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary dark:text-cyan-400">
                                        <Sparkles size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white text-base">Continuous Learning & Telemetry</h4>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                                            Iteratively updated with new codebase optimizations, deployment specs, and technical documentation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link 
                                    to="/chat" 
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 group"
                                >
                                    Launch Mani AI Workspace 
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Glassmorphic Chat Mockup */}
                        <div className="lg:col-span-6 relative">
                            {/* Decorative background glows */}
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 dark:bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-75"></div>

                            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 relative group">
                                
                                {/* Mockup Header */}
                                <div className="bg-slate-50/50 dark:bg-slate-950/60 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                                            <Bot size={18} />
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-white text-xs font-heading leading-tight">
                                                Mani AI Assistant
                                            </h4>
                                            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono leading-none">
                                                Motto: "AI for easy life"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                                </div>

                                {/* Mockup Message Pane */}
                                <div className="p-5 space-y-4 h-[280px] overflow-hidden select-none relative">
                                    
                                    {/* Message 1 (Mani) */}
                                    <div className="flex gap-2.5 max-w-[85%] mr-auto">
                                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                                            <Bot size={14} />
                                        </div>
                                        <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800/60 shadow-sm text-xs leading-relaxed">
                                            Hello! I am <strong>Mani</strong>, the official AI assistant of <strong>RSMK Technologies</strong>. How can I help you today?
                                        </div>
                                    </div>

                                    {/* Message 2 (User) */}
                                    <div className="flex gap-2.5 max-w-[85%] ml-auto flex-row-reverse">
                                        <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0 text-xs">
                                            U
                                        </div>
                                        <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs leading-relaxed">
                                            What is BudgetBuddy?
                                        </div>
                                    </div>

                                    {/* Message 3 (Mani) */}
                                    <div className="flex gap-2.5 max-w-[85%] mr-auto">
                                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                                            <Bot size={14} />
                                        </div>
                                        <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800/60 shadow-sm text-xs leading-relaxed">
                                            BudgetBuddy is an Android expense tracking app built by RSMK Technologies using React Native and Expo, featuring clean visualization models.
                                        </div>
                                    </div>

                                    {/* Glass Overlay with Blur and Link */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50/95 via-slate-50/70 to-transparent dark:from-slate-950/95 dark:via-slate-950/70 dark:to-transparent flex items-center justify-center p-6 transition-all duration-300 group-hover:backdrop-blur-[1px]">
                                        <Link 
                                            to="/chat" 
                                            className="transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300 inline-flex flex-col items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-2xl text-center max-w-xs hover:border-primary dark:hover:border-cyan-500/50 group/btn"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary dark:text-cyan-400 flex items-center justify-center mx-auto group-hover/btn:scale-110 transition-transform duration-300">
                                                <Bot size={24} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 dark:text-white text-sm">Open Live Chat</h5>
                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                                    Start a real-time conversation with Mani AI
                                                </p>
                                            </div>
                                            <span className="text-xs text-primary dark:text-cyan-400 font-semibold inline-flex items-center gap-1 mt-1">
                                                Start Chatting <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                    </div>

                                </div>

                                {/* Mockup footer */}
                                <div className="bg-slate-50/30 dark:bg-slate-950/20 px-5 py-2.5 border-t border-slate-200 dark:border-slate-800/60 text-[9px] text-slate-400 dark:text-slate-500 text-center font-sans tracking-wide">
                                    Interactive Workspace Available 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Work Showcase */}
            <motion.section id="work" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-2 md:mb-4">Selected Work</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                                Engineered systems and commercial products deployed to address complex technical challenges end-to-end.
                            </p>
                        </div>
                        <Link to="/projects" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark mt-4 md:mt-0">
                            Open Product Showcase <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {spotlightProjects.map((project) => {
                            if (!project) return null;
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
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                                        <span className="text-primary text-sm font-semibold inline-flex items-center">
                                            Explore Solution <ArrowRight className="ml-1" size={14} />
                                        </span>
                                    </article>
                                </a>
                            );
                        })}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <Link to="/projects" className="inline-flex items-center text-primary font-semibold">
                            Open Product Showcase <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Skills */}
            <motion.section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-3 md:mb-4">Our Core Technical Divisions</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Pioneering technical depth in hardware designs, IoT telemetry, energy systems, and software engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                    <Icon className="text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform" size={30} />
                                    <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white font-heading">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-10">
                        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Engineering Divisions</h3>
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
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Core Technology Stack Division</h3>
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
            <motion.section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-6 md:mb-8 text-center">
                            Our Engineering Methodology
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">01</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Rapid Prototyping</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">We construct functional prototypes quickly, validating engineering concepts early in the cycle.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">02</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Live Showcasing</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">All products feature active interfaces, ensuring clients and users inspect real-world operation.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">03</p>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Agile Iteration</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">We maintain continuous feedback loops to improve codebase efficiency and hardware response.</p>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Server className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">Coherent Systems Architecture</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">We plan system designs comprehensively so physical controllers and web dashboards function in unison.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Cloud className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">Production Deploys</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Our services deploy using professional cloud pipelines and CI/CD tools, not local mockups.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                                <Workflow className="text-primary mb-3" size={22} />
                                <h4 className="font-bold text-secondary dark:text-white mb-1">Performance Tuning</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Post-launch telemetry is reviewed to audit network bottlenecks, database queries, and power draws.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section id="contact" className="py-16 md:py-24 bg-primary text-white relative overflow-hidden" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <div className="container-padding text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 md:mb-6 tracking-tight">Let Us Connect</h2>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you are seeking custom hardware telemetry, scalable web apps, or AI integration, our team is ready to deliver. Let's build together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
                        <a href="mailto:rsmk.technologies@rsmk.co.in" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 sm:px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-xl w-full sm:w-auto">
                            <Mail size={18} /> Email Us
                        </a>
                        <a href="https://github.com/Rsmk27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-bold px-6 py-3 sm:px-8 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/company/rsmktech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-bold px-6 py-3 sm:px-8 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
