import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Cpu, Activity, Lightbulb } from 'lucide-react';

const services = [
    {
        id: 'software-development',
        title: 'Software Development',
        description: 'Custom enterprise software capability. Web, mobile, and cloud solutions built for scale and performance.',
        icon: Code,
        features: ['Custom Web Applications', 'Mobile App Development', 'Cloud Architecture', 'API Integration']
    },
    {
        id: 'iot-embedded-systems',
        title: 'IoT & Embedded Systems',
        description: 'Hardware-software convergence. We build smart devices and integrated systems that connect the physical and digital worlds.',
        icon: Cpu,
        features: ['Hardware Design', 'Firmware Development', 'Sensor Integration', 'Industrial IoT']
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        description: 'Intelligent process automation and data-driven decision making systems to optimize business operations.',
        icon: Activity,
        features: ['Machine Learning Models', 'Process Automation', 'Data Analytics', 'Smart Chatbots']
    },
    {
        id: 'smart-energy',
        title: 'Smart Energy Solutions',
        description: 'Sustainable technology for a greener future. Energy management and optimization for modern infrastructure.',
        icon: Lightbulb,
        features: ['Energy Monitoring', 'Smart Grid Solutions', 'Green Tech', 'Efficiency Consulting']
    }
];

export default function Services() {
    return (
        <div className="pt-24 pb-20 container-padding min-h-screen">
            <Helmet>
                <title>Services | RSMK Technologies - Software, IoT & AI Solutions</title>
                <meta name="description" content="Explore our technology services: Software Development, IoT & Embedded Systems, AI & Automation, and Smart Energy Solutions." />
            </Helmet>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white font-heading">Our Services</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Comprehensive technology solutions tailored to your business needs.
                    We combine engineering excellence with strategic innovation to drive growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="glass-panel p-8 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary group bg-white dark:bg-slate-900">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={32} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 font-heading text-secondary dark:text-white">{service.title}</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Key Capabilities</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link to={`/contact?service=${service.id}`} className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors font-medium">
                            Consult with us
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
