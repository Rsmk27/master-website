import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

const DecryptionText = ({ text, className, animateOnHover = true, speed = 30, revealSpeed = 50 }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / (revealSpeed / 10); // Adjust speed of reveal
        }, speed);
    };

    useEffect(() => {
        if (!animateOnHover) {
            scramble();
        }
    }, []);

    const handleMouseEnter = () => {
        if (animateOnHover) {
            setIsHovering(true);
            scramble();
        }
    };

    return (
        <motion.span
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </motion.span>
    );
};

export default DecryptionText;
