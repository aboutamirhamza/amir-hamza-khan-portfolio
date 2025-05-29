import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import logo from '../../assets/img/logo/logo.png';
export const Header = () => {
    const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
    const toogleDark = ()=>{
    document.getElementById('rootElement').classList.toggle('dark');
  }
  return (
    <header className="dark:bg-slate-950 dark:text-white dark:transition-colors overflow-hidden" id="rootElement">
        <div className="max-w-primary mx-auto px-4 py-6">
            <div className="flex justify-between items-center extrasmall:flex-col gap-6 lg:flex-row">
                <motion.div
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                className="dark:bg-white">
                    <a href="#"><img src={logo} alt="" /></a>
                </motion.div>
                <motion.div
                ref={ref}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                >
                    <ul className="flex gap-10">
                        <li><a href="#" className="font-inter text-base hover:text-orange-600 transition-colors">Home</a></li>
                        <li><a href="#" className="font-inter text-base hover:text-orange-600 transition-colors">About</a></li>
                        <li><a href="#" className="font-inter text-base hover:text-orange-600 transition-colors">Projects</a></li>
                        <li><a href="#" className="font-inter text-base hover:text-orange-600 transition-colors">Contact</a></li>
                    </ul>
                </motion.div>
                <motion.div
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                className="flex gap-4">
                    <a href="#" className="header_right_btn">Resume</a>
                    <a href="#" className="header_right_btn">Hire Me</a>
                    <a href="#" className="header_right_btn" onClick={toogleDark}>Light/Dark</a>
                </motion.div>
            </div>
        </div>
    </header>
  );
}

export default Header