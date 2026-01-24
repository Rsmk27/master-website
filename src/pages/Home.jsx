import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Cpu, Activity, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

const services = [
    { title: 'Software Development', icon: Code, text: 'Enterprise-grade web and mobile applications built for scale.' },
    { title: 'IoT & Embedded', icon: Cpu, text: 'Smart hardware integration and firmware solutions connecting the physical world.' },
    { title: 'AI & Automation', icon: Activity, text: 'Intelligent systems and data analytics to optimize your business operations.' },
];

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>RSMK Technologies | Software, IoT & Smart Technology Solutions</title>
                <meta name="description" content="RSMK Technologies delivers expert Software Development, IoT, Embedded Systems, and AI solutions. Your partner in digital transformation." />
                <meta name="keywords" content="Technology solutions company, Software and IoT solutions, Embedded systems development, AI and automation services, Smart energy & sustainable technology solutions" />
            </Helmet>

            <Hero />

            {/* About Preview */}
            <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="container-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-6">
                            Bridging the Gap Between Hardware and Software
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            RSMK Technologies is a premier technology consulting firm. We don't just write code; we engineer complete systems.
                            From the sensor on the ground to the cloud dashboard, we provide end-to-end expertise.
                        </p>
                        <Link to="/about-us" className="text-primary font-bold hover:underline inline-flex items-center">
                            Read Our Story <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="container-padding">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-4">Our Core Expertise</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                                We deliver specialized solutions across critical technology domains.
                            </p>
                        </div>
                        <Link to="/services" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark mt-4 md:mt-0">
                            View All Services <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                <s.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white font-heading">{s.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{s.text}</p>
                                <Link to="/services" className="text-sm font-semibold text-secondary dark:text-white hover:text-primary transition-colors flex items-center">
                                    Learn More <ArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <Link to="/services" className="inline-flex items-center text-primary font-semibold">
                            View All Services <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mb-6">
                                Why Leading Companies Trust RSMK
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="bg-blue-50 dark:bg-slate-800 p-3 rounded-lg h-fit text-primary flex-shrink-0"><ShieldCheck size={24} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-secondary dark:text-white">Enterprise-Grade Reliability</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Systems engineered for stability, security, and scalability from day one. We build technology that lasts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-50 dark:bg-slate-800 p-3 rounded-lg h-fit text-primary flex-shrink-0"><Zap size={24} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-secondary dark:text-white">Rapid Innovation</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Agile methodologies that deliver value faster without compromising quality. We keep you ahead of the curve.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-50 dark:bg-slate-800 p-3 rounded-lg h-fit text-primary flex-shrink-0"><Users size={24} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-secondary dark:text-white">Client-Centric Partnership</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We work as an extension of your team, aligned with your business goals. Your success is our metric.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-3xl"></div>
                            <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                                <blockquote className="text-xl italic text-slate-600 dark:text-slate-300 mb-6 relative">
                                    <span className="text-6xl text-primary/20 absolute -top-6 -left-2">"</span>
                                    RSMK Technologies transformed our legacy systems into a modern, efficient digital ecosystem. Their expertise in both hardware and software is unmatched.
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-500">
                                        MR
                                    </div>
                                    <div>
                                        <div className="font-bold text-secondary dark:text-white">Michael Ross</div>
                                        <div className="text-sm text-slate-500">CTO, Manufacturing Corp</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container-padding text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Ready to Engineer Your Future?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how RSMK Technologies can drive your digital transformation and build your next big solution.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300">
                        Get a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}

