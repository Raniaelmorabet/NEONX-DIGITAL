import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import nav from "../assets/NavImage/NavIcon.png";
import { Button } from "./ui/button.jsx";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const menuItems = [
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#faqs", label: "FAQs" },
    ];

    return (
        <>
            <motion.header
                ref={ref}
                className="sticky top-0 left-0 right-0 z-20 bg-[#2C2F1E] bg-opacity-50 backdrop-blur-md"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5 } },
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            className="w-20 relative drop-shadow-[0_4px_6px_#D1F833]"
                            initial={{ opacity: 0, scale: 0.9, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={nav} alt="Logo" />
                        </motion.div>
                        <nav className="hidden md:block">
                            <motion.ul
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex space-x-8 bg-white bg-opacity-5 border-[#404138] border-[0.5px] rounded-full px-8 py-2"
                                >
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.3 }}
                                    >
                                        <a href={item.href} className="text-muted hover:text-[#DDFF00] font-urbanist font-thin">
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="hidden md:block"
                            >
                            <Button className="bg-primary text-[#0D0D0D] font-urbanist font-medium hover:bg-primary rounded-full">
                                Explore
                            </Button>
                        </motion.div>
                        <button className="md:hidden text-white" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c5f82a] to-transparent opacity-50"></div>
            </motion.header>

            {/* Mobile menu */}
            <motion.div
                className="fixed inset-0 z-30 bg-black bg-opacity-90 md:hidden"
                initial={{ opacity: 0, x: "100%" }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <nav>
                        <ul className="flex flex-col space-y-6 text-center">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <a href={item.href} className="text-2xl text-muted hover:text-[#DDFF00] font-urbanist font-thin" onClick={closeMenu}>
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <Button className="bg-[#c5f82a] text-black hover:bg-[#d6ff3a] mt-8 rounded-full">Explore</Button>
                </div>
            </motion.div>
        </>
    );
}

export default Navbar;
