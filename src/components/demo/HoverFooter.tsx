import {
    Instagram,
    Twitter,
    Linkedin,
    Github,
    Send,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {

    // Social media icons
    const socialLinks = [
        { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/rsmk_27/" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/rsmk27/" },
        { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/SrinivasManik20" },
        { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Rsmk27" },
        { icon: <Send size={20} />, label: "Telegram", href: "https://t.me/RSMK_27" },
    ];

    return (
        <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
            <div className="max-w-7xl mx-auto p-14 z-40 relative">
                <div className="flex flex-col items-center text-center pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="/logo-v2.png" alt="RSMK" className="w-8 h-8 mr-2" />
                            <span className="text-white text-3xl font-bold">RSMK</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300 max-w-2xl">
                            Electrical & Electronics Engineering Student | IoT & Embedded Systems Learner | Smart Energy & Automation Focus | Developing Practical, Reliable Tech Solutions
                        </p>
                    </div>
                </div>

                <hr className="border-t border-gray-700 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-gray-400">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#3ca2fa] transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left text-gray-500">
                        &copy; {new Date().getFullYear()} RSMK. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
                <TextHoverEffect text="RSMK" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}

export default HoverFooter;
