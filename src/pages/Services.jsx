import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cpu, Activity, Lightbulb } from 'lucide-react';

const services = [
    {
        id: 'software-development',
        title: 'Software Products',
        description: 'Web platforms, automation tools, and utility applications shipped as real, usable products.',
        icon: Code,
        features: ['Product Prototypes', 'Frontend + Backend Systems', 'Cloud Deployments', 'API Integrations']
    },
    {
        id: 'iot-embedded-systems',
        title: 'IoT & Embedded Builds',
        description: 'Hardware-software experiments that connect sensors, microcontrollers, and intelligent automation workflows.',
        icon: Cpu,
        features: ['Firmware Experiments', 'Sensor Integration', 'Device Dashboards', 'Rapid Prototyping']
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        description: 'Practical AI tools and workflows focused on speed, reliability, and useful day-to-day outcomes.',
        icon: Activity,
        features: ['AI Assistants', 'Automation Scripts', 'Data Workflows', 'Prompt-driven Interfaces']
    },
    {
        id: 'smart-energy',
        title: 'Smart Energy Experiments',
        description: 'Hands-on projects around energy monitoring, optimization, and sustainability-focused engineering.',
        icon: Lightbulb,
        features: ['Energy Dashboards', 'Sustainable Systems', 'Green Tech Prototypes', 'Measurement Tooling']
    }
];

export default function Services() {
    return (
        <div className="pt-24 pb-20 container-padding min-h-screen">
            <Helmet>
                <title>Build Areas | RSMK Projects</title>
                <meta name="description" content="Explore the main technical areas where RSMK builds software products, embedded systems, AI tools, and energy experiments." />
            </Helmet>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white font-heading">Build Areas</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Instead of service packages, this page maps the domains where I keep building and shipping projects.
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

                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Current Focus</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
