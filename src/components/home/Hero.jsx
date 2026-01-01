import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PortfolioPage } from '@/components/ui/starfall-portfolio-landing';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    // Data to match current branding
    const rsmkData = {
        logo: { initials: 'R', name: 'RSMK Technologies' },
        navLinks: [], // Hide internal nav
        resume: null, // Hide resume button
        hero: {
            titleLine1: 'RSMK',
            titleLine2Gradient: 'Technologies',
            subtitle: 'Building the digital infrastructure of tomorrow. Simplicity • Precision • Intelligence',
        },
        ctaButtons: {
            primary: {
                label: 'Explore Ecosystem',
                onClick: () => window.location.href = '/ecosystem'
            },
            secondary: {
                label: 'Our Vision',
                onClick: () => window.location.href = '/about'
            },
        },
        projects: [], // Hide projects section in Hero
        stats: [],    // Hide stats section in Hero
        showAnimatedBackground: true
    };

    return (
        <section className="relative h-screen flex flex-col overflow-hidden">
            {/* Use PortfolioPage as the underlying visual engine but inject our custom content if needed 
                 Actually, PortfolioPage is structured as a full page. 
                 We will use it to render the Hero part only by passing empty lists for other sections 
                 and using our custom logo/hero text.
             */}

            {/* We need to cheat a bit to hide the internal Navbar if we don't want it, 
                 but since we passed empty navLinks and null resume, it should look minimal. 
                 However, the component renders a nav bar. 
                 If we want to keep our existing Navbar (from App.jsx), we might want to hide the PortfolioPage nav via CSS or just live with it.
                 Given the design, the PortfolioPage nav is simple. 
                 But App.jsx has a fixed Navbar. 
                 Let's try to pass a style to hide the nav if possible, or we can just modify the imports.
                 Wait, I can't modify the import easily without modifying the component file I just created.
                 Actually, I can wrap it in a div that hides the nav if I target it, but that's hacky.
                 Let's just use it. It will render "R RSMK Technologies" at the top left.
                 Our main Navbar is fixed. So it might overlay. 
                 Let's see. 
             */}

            <div className="absolute inset-0 z-0">
                <PortfolioPage {...rsmkData}>
                    {/* 
                      Injecting the Logo Image manually into the hero area using the children prop I added.
                      This ensures the BIG logo is present.
                     */}
                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <motion.img
                            src="/logo.png"
                            alt="RSMK Logo"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }} // Faster delay since Aurora loads fast
                            className="w-24 h-24 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                        />
                    </div>

                    <motion.div
                        style={{ opacity, y }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 z-20"
                    >
                        <span className="text-[10px] uppercase tracking-widest">Scroll to Navigate</span>
                        <ArrowDown className="animate-bounce" size={20} />
                    </motion.div>
                </PortfolioPage>
            </div>
        </section>
    );
}
