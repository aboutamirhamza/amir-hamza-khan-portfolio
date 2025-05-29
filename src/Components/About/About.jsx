import { motion, useScroll,useTransform, useInView } from "motion/react";
import aboutImage from "../../assets/img/about/about.png";
import SectionHeading from "../SectionHeading/SectionHeading";
import React, { useRef } from "react";
export const About = () => {
     const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.7, 2]);

  return (
    <section className="px-16 py-28 bg-gray-100 extrasmall:px-16 sm:px-32 md:px-32 lg:px-48 xl:px-28  dark:bg-slate-950 dark:text-white dark:transition-colors overflow-hidden">
        <div className="max-w-primary mx-auto">
            <SectionHeading title="About Me" />
        </div>
        <motion.div
        style={{ scaleX }}
        className="max-w-primary mx-auto py-12">
            <div className="flex items-center justify-between gap-8 extrasmall:flex-col gap-6 md:flex-row">
                <div className="w-1/2 extrasmall:w-full md:w-1/2">
                    <motion.p
                    ref={ref}
                    variants={{
              hidden: {opacity:0, x:-75},
              visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.5, delay: 0.25}}
                    className="font-inter text-primary text-base py-4">Hi, I'm Amir Hamza Khan — a passionate Full Stack Web Developer from Bangladesh with hands-on experience in building dynamic, high-performance web applications.</motion.p>
                    <motion.p
                    ref={ref}
                    variants={{
              hidden: {opacity:0, x:-75},
              visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.5, delay: 0.25}}
                    className="font-inter text-primary text-base py-4">I’m experienced in developing robust backend systems using PHP, MySQL, and the Laravel framework. On the content management side, I have deep expertise in WordPress development, including custom themes creation. For the frontend, I work with HTML, CSS, Sass, and Tailwind CSS to craft responsive, visually appealing user interfaces. I also build dynamic web applications using modern JavaScript technologies like React, Vue.js, and Node.js, ensuring high interactivity and performance. Additionally, I have hands-on experience in mobile app development using Android Studio, allowing me to create seamless cross-platform experiences.</motion.p>
                    <motion.p
                    ref={ref}
                    variants={{
              hidden: {opacity:0, x:-75},
              visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.5, delay: 0.25}}
                    className="font-inter text-primary text-base py-4">With a keen eye for design and a solid background in both frontend and backend technologies, I enjoy creating clean, functional, and user-friendly interfaces. I take pride in writing efficient code and solving complex problems — always aiming to deliver high-quality results.</motion.p>
                </div>
                <motion.div
                ref={ref}
                variants={{
              hidden: {opacity:0, x:75},
              visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.5, delay: 0.25}}
                className="max-w-full">
                    <img src={aboutImage} alt="" />
                </motion.div>
            </div>
        </motion.div>
    </section>
  );
}
export default About