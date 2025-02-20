import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import nav from "../assets/NavImage/NavIcon.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#1a1a1a6c] py-4 px-6 mt-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-4 md:mb-0"
        >
          <a href="/">
            <img
              src={nav}
              alt="Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
          </a>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0 text-sm"
        >
          <a href="/features" className="text-gray-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </a>
          <a href="/services" className="text-gray-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="/faqs" className="text-gray-400 hover:text-white transition-colors">
            FAQs
          </a>
        </motion.nav>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="text-gray-400 text-sm"
        >
          2025 NeonX Digital
        </motion.div>
      </div>
    </motion.footer>
  );
}
