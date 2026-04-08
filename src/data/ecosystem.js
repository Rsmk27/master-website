import {
    User, Wind, Book, Gamepad2, Building, Bot, Wallet,
    ArrowLeftRight, Link, Newspaper, Leaf, Sun, PenTool, Zap, Smartphone, ShieldAlert,
    Cpu, Cloud, Code2
} from 'lucide-react';

export const projects = [
    {
        title: "My Portfolio",
        description: "Personal showcase of all my web and engineering projects.",
        link: "https://its.rsmk.me",
        type: "Portfolio",
        domain: "Additional Skills (AI-assisted)",
        icon: User,
        image: "/livepreview/portfoliolive.webp",
        color: "from-violet-500 to-purple-500",
        glowColor: "purple"
    },
    {
        title: "Budget Buddy",
        description: "Personal finance and expense tracking website.",
        link: "https://budgetbuddy.rsmk.co.in",
        type: "Flagship",
        domain: "Additional Skills (AI-assisted)",
        icon: Wallet,
        image: "/livepreview/bblive.webp",
        color: "from-green-500 to-emerald-500",
        glowColor: "green"
    },
    {
        title: "ColorOhm",
        description: "Precision resistor color code calculator for engineers.",
        link: "https://colorohm.rsmk.me",
        type: "Flagship",
        domain: "Additional Skills (AI-assisted)",
        icon: Zap,
        image: "/livepreview/colorohmlive.webp",
        color: "from-yellow-500 to-orange-500",
        glowColor: "orange"
    },
    {
        title: "ColorOhm App",
        description: "Android app for decoding and encoding resistor color codes with quick, practical lookup in the field.",
        link: "https://github.com/Rsmk27/colorohm-reactapp",
        downloadLink: "https://github.com/Rsmk27/colorohm-reactapp/releases/download/v1.0.0/ColorOhm-v1.0.0.apk",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Smartphone,
        image: "/livepreview/colorohm-android-app.webp",
        color: "from-amber-500 to-yellow-500",
        glowColor: "orange"
    },
    {
        title: "Auto Exhaust Fan",
        description: "Documentation for Arduino-based automated air quality system.",
        link: "https://autoexhaustfan.rsmk.co.in",
        type: "Project",
        domain: "Internet of Things",
        icon: Wind,
        image: "/livepreview/aeflive.webp",
        color: "from-slate-500 to-gray-500",
        glowColor: "blue"
    },
    {
        title: "Library Catalog",
        description: "Digital cataloging system for efficient book management.",
        link: "https://books.rsmk.co.in",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Book,
        image: "/livepreview/liblive.webp",
        color: "from-amber-500 to-orange-500",
        glowColor: "orange"
    },
    {
        title: "PlayZone",
        description: "Gaming hub featuring 40+ browser-based games.",
        link: "https://playzone.rsmk.me",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Gamepad2,
        image: "/livepreview/playzonelive.webp",
        color: "from-red-500 to-rose-500",
        glowColor: "red"
    },
    {
        title: "Digital Hostel Manager",
        description: "Digital management of Hostel Rooms.",
        link: "https://nh.rsmk.co.in",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Building,
        image: "/livepreview/nhlive.webp",
        color: "from-blue-500 to-cyan-500",
        glowColor: "blue"
    },
    {
        title: "AI Chatbot",
        description: "Intelligent conversational agent powered by Gemini 2.5 Flash.",
        link: "https://ai.rsmk.me",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Bot,
        image: "/livepreview/chatbotlive.webp",
        color: "from-emerald-500 to-teal-500",
        glowColor: "green"
    },
    {
        title: "Universal Converter",
        description: "Universal tool for converting various measurement units.",
        link: "https://calc.rsmk.me",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: ArrowLeftRight,
        image: "/livepreview/uchlive.webp",
        color: "from-indigo-500 to-blue-500",
        glowColor: "purple"
    },
    {
        title: "Uniq Visheshalu",
        description: "Link-in-bio landing page for Insta Page.",
        link: "https://uniq-visheshalu.rsmk.me",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Link,
        image: "/livepreview/uniqlive.webp",
        color: "from-pink-500 to-fuchsia-500",
        glowColor: "purple"
    },
    {
        title: "News Headlines",
        description: "Real-time news aggregator using public APIs.",
        link: "https://news.rsmk.co.in",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: Newspaper,
        image: "/livepreview/newslive.webp",
        color: "from-red-600 to-orange-600",
        glowColor: "red"
    },
    {
        title: "Eco Dash",
        description: "Climate and environmental data dashboard.",
        link: "https://ecodash.rsmk.co.in",
        type: "Project",
        domain: "Internet of Things",
        icon: Leaf,
        image: "/livepreview/ecodashlive.webp",
        color: "from-green-400 to-lime-500",
        glowColor: "green"
    },
    {
        title: "Solar Powered Dewatering System",
        description: "Documentation for sustainable water management system.",
        link: "https://spds.rsmk.me",
        type: "Project",
        domain: "Power Systems",
        icon: Sun,
        image: "/livepreview/spdslive.webp",
        color: "from-yellow-400 to-amber-500",
        glowColor: "orange"
    },
    {
        title: "Firefighter Monitoring Device (SFMD)",
        description: "Real-time IoT firefighter safety platform with wearable telemetry (motion, temperature, GPS), Firebase streaming, live commander dashboard, and firmware state machine logic across STARTUP, NORMAL, WARNING, EMERGENCY, and SOS states.",
        link: "https://github.com/Rsmk27",
        type: "Project",
        domain: "Internet of Things",
        icon: ShieldAlert,
        image: "/livepreview/firefighter-monitoring-device.webp",
        color: "from-rose-500 to-red-600",
        glowColor: "red"
    },
    {
        title: "RSMK Blogs",
        description: "Personal blog sharing insights on code and engineering.",
        link: "https://blogs.rsmk.me",
        type: "Project",
        domain: "Additional Skills (AI-assisted)",
        icon: PenTool,
        image: "/livepreview/blogslive.webp",
        color: "from-sky-500 to-blue-500",
        glowColor: "blue"
    }
];

export const domains = [
    {
        name: "Embedded Systems & Hardware",
        id: "embedded-hardware",
        icon: Cpu,
        skills: [
            "ESP32",
            "ESP8266",
            "Arduino",
            "UART",
            "I2C",
            "SPI",
            "MQTT",
            "Sensors",
            "Actuators"
        ]
    },
    {
        name: "Internet of Things",
        id: "internet-of-things",
        icon: Cloud,
        skills: [
            "IoT System Design",
            "Cloud Integration",
            "Real-time Monitoring"
        ]
    },
    {
        name: "Programming Languages",
        id: "programming-languages",
        icon: Code2,
        skills: [
            "C",
            "Embedded C",
            "Assembly",
            "Python",
            "MATLAB"
        ]
    },
    {
        name: "Power Systems",
        id: "power-systems",
        icon: Sun,
        skills: [
            "Power Generation",
            "Transmission & Distribution",
            "Smart Grid Concepts",
            "MATLAB Simulation"
        ]
    },
    {
        name: "Power Electronics",
        id: "power-electronics",
        icon: Zap,
        skills: [
            "Converters",
            "Inverters",
            "Motor Drives",
            "Thyristors",
            "Choppers",
            "PWM Control"
        ]
    },
    {
        name: "Electrical Machines",
        id: "electrical-machines",
        icon: Wind,
        skills: [
            "DC Machines",
            "AC Machines",
            "Transformers",
            "Electrical Motors"
        ]
    },
    {
        name: "Additional Skills (AI-assisted)",
        id: "additional-skills",
        icon: Bot,
        skills: [
            "React.js",
            "Next.js",
            "Firebase",
            "Firestore",
            "React Native",
            "Expo"
        ]
    }
];
