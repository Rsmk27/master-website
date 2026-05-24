import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cpu, Cloud, Sun, Zap, Wind, Bot } from 'lucide-react';

const services = [
    {
        id: 'embedded-systems-hardware',
        title: 'Embedded Systems & Hardware',
        description: 'ESP32, ESP8266, Arduino, communication protocols, sensors, and actuator integration.',
        icon: Cpu,
        features: ['ESP32 & Arduino Design', 'UART / I2C / SPI / MQTT', 'Sensor & Actuator Interfaces', 'Firmware Architecture']
    },
    {
        id: 'internet-of-things',
        title: 'Internet of Things',
        description: 'IoT system design, cloud integration, and real-time monitoring solutions for connected products.',
        icon: Cloud,
        features: ['IoT System Architecture', 'Cloud Data Flows', 'Live Monitoring', 'Telemetry Dashboards']
    },
    {
        id: 'programming-languages',
        title: 'Programming Languages',
        description: 'Low-level and engineering-first languages used for embedded, analytical, and systems development.',
        icon: Code,
        features: ['C & Embedded C', 'Assembly', 'Python', 'MATLAB']
    },
    {
        id: 'power-systems',
        title: 'Power Systems',
        description: 'Power generation, transmission, distribution, smart grids, and MATLAB-based simulation studies.',
        icon: Sun,
        features: ['Power Generation', 'Transmission & Distribution', 'Smart Grid Concepts', 'MATLAB Simulation']
    },
    {
        id: 'power-electronics',
        title: 'Power Electronics',
        description: 'Converters, inverters, motor drives, thyristors, choppers, and PWM control for practical power systems.',
        icon: Zap,
        features: ['Converters & Inverters', 'Motor Drives', 'Thyristors & Choppers', 'PWM Control']
    },
    {
        id: 'electrical-machines',
        title: 'Electrical Machines',
        description: 'DC and AC machine fundamentals, transformer design, and electrical motor systems.',
        icon: Wind,
        features: ['DC Machines', 'AC Machines', 'Transformers', 'Electrical Motors']
    },
    {
        id: 'software-web-engineering',
        title: 'Software & Web Solutions',
        description: 'Design, development, and deployment of scalable websites, native mobile apps, and real-time databases.',
        icon: Bot,
        features: ['React.js & Next.js Webapps', 'React Native & Expo Apps', 'Firebase & Firestore Databases', 'Cloud Infrastructure Design']
    }
];

export default function Services() {
    return (
        <div className="pt-24 pb-12 md:pb-20 container-padding min-h-screen">
            <Helmet>
                <title>Expertise & Services | RSMK Technologies</title>
                <meta name="description" content="Explore RSMK Technologies' core engineering divisions including embedded systems, IoT development, power electronics, and scalable software solutions." />
            </Helmet>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-secondary dark:text-white font-heading">Our Expertise & Services</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    We offer specialized technology consultation and full-scale engineering design across our core tech divisions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {services.map((service) => (
                    <div key={service.id} className="glass-panel p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary group bg-white dark:bg-slate-900">
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
