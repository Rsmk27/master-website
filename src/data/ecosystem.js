import {
    Layers, Wind, Book, Gamepad2, Building, Bot, Wallet,
    ArrowLeftRight, Link, Newspaper, Leaf, Sun, PenTool, Zap, Smartphone, ShieldAlert,
    Cpu, Cloud, Code2
} from 'lucide-react';

export const projects = [
    {
        title: "RSMK Tech Hub",
        description: "The primary corporate portal and showcase for our software and hardware solutions.",
        link: "https://rsmk.co.in",
        type: "Portfolio",
        domain: "Software & Web Engineering",
        icon: Layers,
        image: "/livepreview/portfoliolive.webp",
        color: "from-violet-500 to-purple-500",
        glowColor: "purple"
    },
    {
        title: "Budget Buddy",
        description: "Advanced personal finance and corporate expense tracking system.",
        link: "https://budgetbuddy.rsmk.co.in",
        type: "Flagship",
        domain: "Software & Web Engineering",
        icon: Wallet,
        image: "/livepreview/bblive.webp",
        color: "from-green-500 to-emerald-500",
        glowColor: "green"
    },
    {
        title: "ColorOhm",
        description: "Precision resistor color code calculator and electronics helper for hardware engineers.",
        link: "https://colorohm.rsmk.me",
        type: "Flagship",
        domain: "Software & Web Engineering",
        icon: Zap,
        image: "/livepreview/colorohmlive.webp",
        color: "from-yellow-500 to-orange-500",
        glowColor: "orange"
    },
    {
        title: "ColorOhm App",
        description: "Mobile application for decoding and encoding resistor color codes with quick, practical lookup in the field.",
        link: "https://github.com/Rsmk27/colorohm-reactapp",
        downloadLink: "https://github.com/Rsmk27/colorohm-reactapp/releases/download/v1.0.0/ColorOhm-v1.0.0.apk",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Smartphone,
        image: "/livepreview/colorohm-android-app.webp",
        color: "from-amber-500 to-yellow-500",
        glowColor: "orange"
    },
    {
        title: "Auto Exhaust Fan",
        description: "Smart IoT automated ventilation and air quality monitoring system powered by Arduino.",
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
        description: "Digital cataloging and asset tracking system for high-throughput library and catalog management.",
        link: "https://books.rsmk.co.in",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Book,
        image: "/livepreview/liblive.webp",
        color: "from-amber-500 to-orange-500",
        glowColor: "orange"
    },
    {
        title: "PlayZone",
        description: "Interactive gaming hub containing over 40 browser-based web games.",
        link: "https://playzone.rsmk.me",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Gamepad2,
        image: "/livepreview/playzonelive.webp",
        color: "from-red-500 to-rose-500",
        glowColor: "red"
    },
    {
        title: "Digital Hostel Manager",
        description: "Enterprise room allocation and operational dashboard for digital hostel management.",
        link: "https://nh.rsmk.co.in",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Building,
        image: "/livepreview/nhlive.webp",
        color: "from-blue-500 to-cyan-500",
        glowColor: "blue"
    },
    {
        title: "Mani AI Chatbot",
        description: "Official conversational AI assistant of RSMK Technologies powered by custom LLM APIs.",
        link: "https://project-mani-c0t3.onrender.com/",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Bot,
        image: "/livepreview/chatbotlive.webp",
        color: "from-emerald-500 to-teal-500",
        glowColor: "green"
    },
    {
        title: "Universal Converter",
        description: "High-precision unit conversion and analytical tool for engineering measurements.",
        link: "https://calc.rsmk.me",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: ArrowLeftRight,
        image: "/livepreview/uchlive.webp",
        color: "from-indigo-500 to-blue-500",
        glowColor: "purple"
    },
    {
        title: "Uniq Visheshalu",
        description: "Optimized landing and redirection gateway page for localized social media channels.",
        link: "https://uniq-visheshalu.rsmk.me",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Link,
        image: "/livepreview/uniqlive.webp",
        color: "from-pink-500 to-fuchsia-500",
        glowColor: "purple"
    },
    {
        title: "News Headlines",
        description: "Real-time news aggregator and global feed parser using external APIs.",
        link: "https://news.rsmk.co.in",
        type: "Project",
        domain: "Software & Web Engineering",
        icon: Newspaper,
        image: "/livepreview/newslive.webp",
        color: "from-red-600 to-orange-600",
        glowColor: "red"
    },
    {
        title: "Eco Dash",
        description: "Climate analytics and sensor telemetry dashboard for ecological monitoring.",
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
        description: "Sustainable power engineering and solar-based water management telemetry system.",
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
        description: "Real-time IoT firefighter safety platform with wearable telemetry (motion, temperature, GPS), Firebase streaming, live commander dashboard, and firmware state machine logic.",
        link: "https://github.com/Rsmk27",
        type: "Project",
        domain: "Internet of Things",
        icon: ShieldAlert,
        image: "/livepreview/firefighter-monitoring-device.webp",
        color: "from-rose-500 to-red-600",
        glowColor: "red"
    },
    {
        title: "RSMK Insights",
        description: "Engineering and technology publication sharing deep-dives on hardware and software systems.",
        link: "https://blogs.rsmk.me",
        type: "Project",
        domain: "Software & Web Engineering",
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
        name: "Software & Web Engineering",
        id: "software-web-engineering",
        icon: Layers,
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
