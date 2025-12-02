import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layers, Zap, Database, Server, Wifi, Terminal } from 'lucide-react';

const technologies = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Arduino", icon: Cpu },
    { name: "Python", icon: Terminal },
    { name: "TailwindCSS", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "Firebase", icon: Database },
    { name: "IoT", icon: Wifi },
    { name: "Electronics", icon: Zap },
    { name: "TypeScript", icon: Code2 },
];

const TechMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-slate-950/80 border-y border-white/5 py-4 backdrop-blur-sm relative z-20">
            <div className="flex">
                <motion.div
                    className="flex gap-12 px-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 text-slate-400 opacity-70 hover:opacity-100 hover:text-cyan-400 transition-colors cursor-default">
                            <tech.icon size={20} />
                            <span className="font-mono text-sm tracking-wider uppercase font-bold">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechMarquee;
