import {
    User, Wind, Book, Gamepad2, Building, Bot, Wallet,
    ArrowLeftRight, Link, Newspaper, Leaf, Sun, PenTool, Zap
} from 'lucide-react';

export const projects = [
    {
        title: "My Portfolio",
        description: "Personal showcase of all my web and engineering projects.",
        link: "https://its.rsmk.me",
        type: "Portfolio",
        domain: "Software Systems",
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
        domain: "Software Systems",
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
        domain: "Electronics",
        icon: Zap,
        image: "/livepreview/colorohmlive.webp",
        color: "from-yellow-500 to-orange-500",
        glowColor: "orange"
    },
    {
        title: "Zest Academy",
        description: "Educational platform (referenced in request).",
        link: "#", // Placeholder as it wasn't in original list but requested
        type: "Flagship",
        domain: "Education",
        icon: Book,
        image: null, // Need to handle missing image
        color: "from-blue-500 to-cyan-500",
        glowColor: "blue"
    },
    {
        title: "Auto Exhaust Fan",
        description: "Documentation for Arduino-based automated air quality system.",
        link: "https://autoexhaustfan.rsmk.co.in",
        type: "Project",
        domain: "IoT & Embedded Systems",
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
        domain: "Software Systems",
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
        domain: "Research & Innovation",
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
        domain: "Software Systems",
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
        domain: "AI & Automation",
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
        domain: "Research & Innovation",
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
        domain: "Research & Innovation",
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
        domain: "Software Systems",
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
        domain: "Smart Energy & Green Tech",
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
        domain: "Smart Energy & Green Tech",
        icon: Sun,
        image: "/livepreview/spdslive.webp",
        color: "from-yellow-400 to-amber-500",
        glowColor: "orange"
    },
    {
        title: "RSMK Blogs",
        description: "Personal blog sharing insights on code and engineering.",
        link: "https://blogs.rsmk.me",
        type: "Project",
        domain: "Research & Innovation",
        icon: PenTool,
        image: "/livepreview/blogslive.webp",
        color: "from-sky-500 to-blue-500",
        glowColor: "blue"
    }
];

export const domains = [
    { name: "Smart Energy & Green Tech", id: "green-tech", icon: Leaf },
    { name: "IoT & Embedded Systems", id: "iot", icon: Wind },
    { name: "Software Systems", id: "software", icon: Building },
    { name: "AI & Automation", id: "ai", icon: Bot },
    { name: "Research & Innovation", id: "research", icon: PenTool }
];
