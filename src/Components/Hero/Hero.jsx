import { useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import Typed from "typed.js";
export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Amir Hamza Khan", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="py-64 px-6 dark:bg-slate-900 dark:text-white dark:transition-colors">
        <div className="max-w-primary mx-auto">
            <div className="flex flex-col items-center gap-10 text-center">
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-inter text-7xl extrasmall:text-5xl lg:text-7xl"
      >
        Hi, <span ref={el} />
        </motion.h3>
            <motion.p
            variants={{
              hidden: {opacity:0, y:75},
              visible: {opacity:1, y:0},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.25}}
            className="text-primary font-inter font-light text-2xl px-52 extrasmall:px-0 text-xl lg:px-52 text-2xl">I'm a Full Stack Web Developer. I design creative, visually appealing websites and build dynamic, functional web applications.</motion.p>
            <div className="py-24">
            <motion.svg
            variants={{
              hidden: {opacity:0, y:-75},
              visible: {opacity:1, y:0},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.25}}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </motion.svg>
            </div>
        </div>
        </div>
    </section>
  );
}
export default Hero