import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Zap, Code2, Activity, Cpu, Globe, Layers, Github, Linkedin, Mail, ExternalLink,
  Twitter, Instagram, User, Wind, Book, Gamepad2, Building, Bot, Wallet,
  ArrowLeftRight, Link, Newspaper, Leaf, Sun, PenTool, Send
} from 'lucide-react';
import HoverFooter from "@/components/demo/HoverFooter";
import DecryptionText from "@/components/DecryptionText";
import TechMarquee from "@/components/TechMarquee";
import Cursor from "@/components/Cursor";

/* --- UTILITY: CLASS MERGER (cn) --- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* --- COMPONENT: SHADCN CARDS --- */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

/* --- COMPONENT: WARP BACKGROUND --- */
const Beam = React.memo(({ width, x, delay, duration }) => {
  const hue = Math.floor(Math.random() * 360);
  const ar = Math.floor(Math.random() * 10) + 1;

  return (
    <motion.div
      style={{
        "--x": `${x}`,
        "--width": `${width}`,
        "--aspect-ratio": `${ar}`,
        "--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
      }}
      className={`absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]`}
      initial={{ y: "100cqmax", x: "-50%" }}
      animate={{ y: "-100%", x: "-50%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
});
Beam.displayName = "Beam";

const WarpBackground = React.memo(({
  children,
  perspective = 100,
  className,
  beamsPerSide = 2, // Reduced from 3 for performance
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = "rgba(100, 116, 139, 0.2)",
  ...props
}) => {
  const generateBeams = useCallback(() => {
    const beams = [];
    const cellsPerSide = Math.floor(100 / beamSize);
    const step = cellsPerSide / beamsPerSide;

    for (let i = 0; i < beamsPerSide; i++) {
      const x = Math.floor(i * step);
      const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
      beams.push({ x, delay });
    }
    return beams;
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);

  const topBeams = useMemo(() => generateBeams(), [generateBeams]);
  const rightBeams = useMemo(() => generateBeams(), [generateBeams]);
  const bottomBeams = useMemo(() => generateBeams(), [generateBeams]);
  const leftBeams = useMemo(() => generateBeams(), [generateBeams]);

  return (
    <div className={cn("relative rounded border p-6 md:p-20", className)} {...props}>
      <div
        style={{
          "--perspective": `${perspective}px`,
          "--grid-color": gridColor,
          "--beam-size": `${beamSize}%`,
        }}
        className={
          "pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        }
      >
        {/* top side */}
        <div className="absolute [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]">
          {topBeams.map((beam, index) => (
            <Beam key={`top-${index}`} width={`${beamSize}%`} x={`${beam.x * beamSize}%`} delay={beam.delay} duration={beamDuration} />
          ))}
        </div>
        {/* bottom side */}
        <div className="absolute top-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]">
          {bottomBeams.map((beam, index) => (
            <Beam key={`bottom-${index}`} width={`${beamSize}%`} x={`${beam.x * beamSize}%`} delay={beam.delay} duration={beamDuration} />
          ))}
        </div>
        {/* left side */}
        <div className="absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]">
          {leftBeams.map((beam, index) => (
            <Beam key={`left-${index}`} width={`${beamSize}%`} x={`${beam.x * beamSize}%`} delay={beam.delay} duration={beamDuration} />
          ))}
        </div>
        {/* right side */}
        <div className="absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]">
          {rightBeams.map((beam, index) => (
            <Beam key={`right-${index}`} width={`${beamSize}%`} x={`${beam.x * beamSize}%`} delay={beam.delay} duration={beamDuration} />
          ))}
        </div>
      </div>
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
});
WarpBackground.displayName = "WarpBackground";


/* --- SUB-COMPONENTS --- */

const ProjectCard = React.memo(({ project, index }) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <a href={project.link} target="_blank" rel="noreferrer" className="block h-full group">
        <div
          className={cn(
            "aspect-square rounded-2xl relative flex flex-col items-center text-center p-6 gap-4 backdrop-blur-[5px]",
            "bg-slate-900/40 border border-white/10 shadow-[0_1rem_2rem_-1rem_black]",
            "hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300"
          )}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 border border-white/10 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="text-white" size={32} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 font-mono">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
            Open Project <ExternalLink size={12} />
          </div>
        </div>
      </a>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

/* --- INTRO OVERLAY COMPONENT --- */
const IntroOverlay = React.memo(({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootSequence = [
      { text: "INITIALIZING CORE SYSTEMS...", delay: 200 },
      { text: "LOADING NEURAL MODULES...", delay: 800 },
      { text: "ESTABLISHING SECURE CONNECTION...", delay: 1500 },
      { text: "SYNCING PROJECT DATABASES...", delay: 2200 },
      { text: "OPTIMIZING VISUAL INTERFACES...", delay: 2800 },
      { text: "ACCESS GRANTED. WELCOME USER.", delay: 3400 },
    ];

    let timeouts = [];

    // Text Sequence
    bootSequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay);
      timeouts.push(timeout);
    });

    // Progress Bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Non-linear progress for realism
        const increment = Math.random() * 5 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Completion
    const completeTimeout = setTimeout(onComplete, 4000);
    timeouts.push(completeTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono p-4 text-cyan-500 overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        {/* Terminal Window */}
        <div className="bg-black/80 border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <div className="ml-auto text-[10px] text-cyan-700 tracking-widest">ROOT@SYSTEM:~</div>
          </div>

          <div className="h-48 font-mono text-sm md:text-base space-y-2 overflow-hidden flex flex-col justify-end">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-cyan-400/90"
              >
                <span className="text-cyan-600 mr-2">➜</span>
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-cyan-500"
            >
              _
            </motion.div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-8 space-y-2">
          <div className="flex justify-between text-xs font-bold tracking-[0.2em] text-cyan-600">
            <span>LAUNCHING...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-cyan-950 rounded-full overflow-hidden border border-cyan-900/50">
            <motion.div
              className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});
IntroOverlay.displayName = "IntroOverlay";

/* --- MAIN APP COMPONENT --- */

export default function App() {
  const [loading, setLoading] = useState(true);

  // NOTE: Global mouse tracker removed for performance optimization.

  const projects = useMemo(() => [
    {
      title: "My Portfolio",
      description: "Personal showcase of all my web and engineering projects.",
      link: "https://its.rsmk.me",
      icon: User,
      color: "from-violet-500 to-purple-500",
      glowColor: "purple"
    },
    {
      title: "Auto Exhaust Fan",
      description: "Documentation for Arduino-based automated air quality system.",
      link: "https://autoexhaustfan.rsmk.co.in",
      icon: Wind,
      color: "from-slate-500 to-gray-500",
      glowColor: "blue"
    },
    {
      title: "Library Catalog",
      description: "Digital cataloging system for efficient book management.",
      link: "https://books.rsmk.co.in",
      icon: Book,
      color: "from-amber-500 to-orange-500",
      glowColor: "orange"
    },
    {
      title: "PlayZone",
      description: "Gaming hub featuring 40+ browser-based games.",
      link: "https://playzone.rsmk.me",
      icon: Gamepad2,
      color: "from-red-500 to-rose-500",
      glowColor: "red"
    },
    {
      title: "ColorOhm",
      description: "Precision resistor color code calculator for engineers.",
      link: "https://colorohm.rsmk.me",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      glowColor: "orange"
    },
    {
      title: "Digital Hostel Manager",
      description: "Digital management of Hostel Rooms.",
      link: "https://nh.rsmk.co.in",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue"
    },
    {
      title: "AI Chatbot",
      description: "Intelligent conversational agent powered by Gemini 2.5 Flash.",
      link: "https://ai.rsmk.me",
      icon: Bot,
      color: "from-emerald-500 to-teal-500",
      glowColor: "green"
    },
    {
      title: "Budget Buddy",
      description: "Personal finance and expense tracking website.",
      link: "https://budgetbuddy.rsmk.co.in",
      icon: Wallet,
      color: "from-green-500 to-emerald-500",
      glowColor: "green"
    },
    {
      title: "Universal Converter",
      description: "Universal tool for converting various measurement units.",
      link: "https://calc.rsmk.me",
      icon: ArrowLeftRight,
      color: "from-indigo-500 to-blue-500",
      glowColor: "purple"
    },
    {
      title: "Uniq Visheshalu",
      description: "Link-in-bio landing page for Insta Page.",
      link: "https://uniq-visheshalu.rsmk.me",
      icon: Link,
      color: "from-pink-500 to-fuchsia-500",
      glowColor: "purple"
    },
    {
      title: "News Headlines",
      description: "Real-time news aggregator using public APIs.",
      link: "https://news.rsmk.co.in",
      icon: Newspaper,
      color: "from-red-600 to-orange-600",
      glowColor: "red"
    },
    {
      title: "Eco Dash",
      description: "Climate and environmental data dashboard.",
      link: "https://ecodash.rsmk.co.in",
      icon: Leaf,
      color: "from-green-400 to-lime-500",
      glowColor: "green"
    },
    {
      title: "Solar Powered Dewatering System",
      description: "Documentation for sustainable water management system.",
      link: "https://spds.rsmk.me",
      icon: Sun,
      color: "from-yellow-400 to-amber-500",
      glowColor: "orange"
    },
    {
      title: "RSMK Blogs",
      description: "Personal blog sharing insights on code and engineering.",
      link: "https://blogs.rsmk.me",
      icon: PenTool,
      color: "from-sky-500 to-blue-500",
      glowColor: "blue"
    }
  ], []);

  // Animation Variants - Updated for Simultaneous Start
  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3.8, // Wait for intro
        staggerChildren: 0.1 // Stagger letters within the word
      }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 }
    }
  };

  const floatAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleIntroComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">

      <Cursor />


      {/* Intro Overlay */}
      <AnimatePresence>
        {loading && (
          <IntroOverlay onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER: Social Links Only */}
        <header className="fixed top-0 w-full p-4 md:p-6 z-40 flex justify-center md:justify-end items-center backdrop-blur-md border-b border-white/20 bg-slate-950/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="flex gap-6 md:gap-8">
            <SocialLink href="https://github.com/Rsmk27" icon={Github} label="Github" />
            <SocialLink href="https://linkedin.com/in/rsmk27/" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://x.com/SrinivasManik20" icon={Twitter} label="Twitter" />
            <SocialLink href="https://www.instagram.com/rsmk_27/" icon={Instagram} label="Instagram" />
            <SocialLink href="https://t.me/RSMK_27" icon={Send} label="Telegram" />
          </div>
        </header>

        {/* HERO: Animated Name with WARP BACKGROUND */}
        <section className="h-screen w-full relative overflow-hidden">
          <WarpBackground className="absolute inset-0 w-full h-full p-0 border-none bg-transparent" gridColor="rgba(6,182,212,0.15)">
            <div className="flex flex-col items-center justify-center h-full text-center z-10 relative pointer-events-auto">

              <div className="relative z-20 mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] flex flex-wrap justify-center gap-x-4 lg:gap-x-6 gap-y-2">

                  {/* Word 1 */}
                  <motion.div
                    className="flex"
                    variants={wordContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {"SRINIVASA".split("").map((char, i) => (
                      <motion.span key={`srinivasa-${i}`}
                        variants={letterVariants}
                        className="inline-block hover:text-cyan-400 transition-colors duration-300"
                        animate={{
                          skewX: [0, 10, -10, 0],
                          filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                        }}
                        transition={{
                          duration: 0.2,
                          delay: Math.random() * 5 + 2,
                          repeat: Infinity,
                          repeatDelay: Math.random() * 5 + 2
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Word 2 */}
                  <motion.div
                    className="flex"
                    variants={wordContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {"MANIKANTA".split("").map((char, i) => (
                      <motion.span key={`manikanta-${i}`}
                        variants={letterVariants}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-white hover:to-white transition-all duration-300"
                        animate={{
                          skewX: [0, 10, -10, 0],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 0.2,
                          delay: Math.random() * 5 + 2,
                          repeat: Infinity,
                          repeatDelay: Math.random() * 5 + 2
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.8, duration: 1 }}
              >
                <motion.p
                  animate={floatAnimation}
                  className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-sm md:text-base bg-cyan-900/10 px-4 py-2 rounded-full border border-cyan-500/20 backdrop-blur-md"
                >
                  Enthusiastic Engineer and Tech Explorer
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-slate-500"
              >
                <div className="text-xs font-mono mb-2 uppercase tracking-widest">Checkout my websites</div>
                <div className="w-px h-8 bg-slate-500 mx-auto"></div>
              </motion.div>

            </div>
          </WarpBackground>
        </section>

        {/* TECH MARQUEE */}
        <TechMarquee />

        {/* WEBSITES GRID */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20 bg-slate-950/50 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-700 flex-grow"></div>
            <h2 className="text-xl font-mono text-slate-400 uppercase tracking-widest">
              <DecryptionText text="MY WEBSITES" />
            </h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 no-scrollbar md:overflow-visible">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[350px] snap-center md:w-auto h-full">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <HoverFooter />

      </div>
    </div>
  );
}

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    <Icon size={24} strokeWidth={1.5} />
  </a>
);