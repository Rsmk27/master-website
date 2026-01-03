import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// SVG Animation Component
const LogoAnimation = ({ onComplete }) => {
    const svgRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        // Fetch and inject the SVG
        fetch('/trace.svg')
            .then(response => {
                if (!response.ok) throw new Error('SVG not found');
                return response.text();
            })
            .then(svgContent => {
                if (svgRef.current) {
                    svgRef.current.innerHTML = svgContent;
                    const svg = svgRef.current.querySelector('svg');
                    if (svg) {
                        initializeSvgAnimation(svg);
                    }
                }
            })
            .catch(() => {
                // Fallback placeholder SVG if trace.svg is missing
                if (svgRef.current) {
                    svgRef.current.innerHTML = `
                        <svg viewBox="0 0 200 60" class="fallback-svg">
                            <path d="M40 20 L40 40 M40 20 L55 20 L55 30 L40 30 L55 40" fill="none" />
                            <path d="M70 20 L90 20 L70 30 L90 40" fill="none" />
                            <path d="M105 40 L105 20 L115 30 L125 20 L125 40" fill="none" />
                            <path d="M140 40 L140 20 L155 30 L140 30 L155 40" fill="none" />
                        </svg>
                    `;
                    const svg = svgRef.current.querySelector('svg');
                    if (svg) initializeSvgAnimation(svg);
                }
            });
    }, []);

    const initializeSvgAnimation = (svgElement) => {
        const elements = svgElement.querySelectorAll('path, circle, line, polyline, rect, polygon');

        elements.forEach(el => {
            const originalFill = el.getAttribute('fill');
            // Store original fill color
            if (originalFill && originalFill !== 'none' && originalFill !== 'transparent') {
                el.style.setProperty('--orig-fill', originalFill);
            } else {
                el.style.setProperty('--orig-fill', '#5ff2ff');
            }
            el.setAttribute('fill', 'transparent');
        });

        // Start drawing animation after a short delay
        setTimeout(() => setIsAnimating(true), 100);

        // Transition to filled state
        setTimeout(() => {
            setIsAnimating(false);
            setIsFilled(true);
        }, 2500);

        // Complete the animation
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 3200);
    };

    return (
        <div className="logo-animation-container">
            <div
                ref={svgRef}
                className={`logo-svg-wrapper ${isAnimating ? 'animating' : ''} ${isFilled ? 'filled' : ''}`}
            />
        </div>
    );
};

export const IntroOverlay = React.memo(({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono p-4 text-cyan-500 overflow-hidden"
        >
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            {/* Logo Animation CSS */}
            <style>{`
                .logo-animation-container {
                    width: 320px;
                    height: 320px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .logo-svg-wrapper {
                    width: 100%;
                    height: auto;
                    filter: drop-shadow(0 0 20px rgba(95, 242, 255, 0.3));
                }

                .logo-svg-wrapper svg {
                    width: 100%;
                    height: auto;
                }

                .logo-svg-wrapper svg path,
                .logo-svg-wrapper svg circle,
                .logo-svg-wrapper svg line,
                .logo-svg-wrapper svg polyline,
                .logo-svg-wrapper svg rect,
                .logo-svg-wrapper svg polygon {
                    stroke: #5ff2ff;
                    stroke-width: 2;
                    fill: transparent;
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    transition: fill 0.8s ease, stroke 0.8s ease;
                }

                .logo-svg-wrapper.animating svg path,
                .logo-svg-wrapper.animating svg circle,
                .logo-svg-wrapper.animating svg line,
                .logo-svg-wrapper.animating svg polyline,
                .logo-svg-wrapper.animating svg rect,
                .logo-svg-wrapper.animating svg polygon {
                    animation: draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                .logo-svg-wrapper.filled svg path,
                .logo-svg-wrapper.filled svg circle,
                .logo-svg-wrapper.filled svg line,
                .logo-svg-wrapper.filled svg polyline,
                .logo-svg-wrapper.filled svg rect,
                .logo-svg-wrapper.filled svg polygon {
                    fill: var(--orig-fill, #5ff2ff);
                    stroke: transparent;
                    stroke-dashoffset: 0;
                }

                @keyframes draw {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <LogoAnimation onComplete={onComplete} />
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-4 text-center z-20"
                >
                    <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white tracking-widest drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        RSMK TECHNOLOGIES
                    </h1>
                    <p className="text-cyan-400/80 text-[10px] md:text-xs tracking-[0.4em] font-medium uppercase mt-3">
                        From Hardware to Software
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
});

IntroOverlay.displayName = "IntroOverlay";
