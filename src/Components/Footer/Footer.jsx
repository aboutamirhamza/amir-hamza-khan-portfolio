import { Github } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer className="dark:bg-slate-900 dark:text-white dark:transition-colors overflow-hidden">
        <div className="max-w-primary mx-auto px-6 py-4">
               <div className="flex items-center justify-center">
                <motion.p
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                className="flex gap-4">
                    <a href="#" className="hover:text-orange-600 hover:transition-colors"><Github /></a>
                    <a href="#" className="hover:text-orange-600 hover:transition-colors"><SquareArrowOutUpRight /></a>
                </motion.p>
               </div>
               <div className="font-inter text-sm text-primary text-center py-6">
                <motion.h3
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                ><a href="#" className="hover:text-orange-600 hover:transition-colors">Amir Hamza Khan</a> - 2025</motion.h3>
               </div>
        </div>
    </footer>
  )
}

export default Footer