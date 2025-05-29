import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import projectOne from '../../assets/img/featured_project/project_1.jpg';
import projectTwo from '../../assets/img/featured_project/project_2.jpg';
import { Github } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import OthersProject from '../OtherProject/OthersProject';
import SectionHeading from '../SectionHeading/SectionHeading';
const Project = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section className="bg-gray-100 py-28 px-6 dark:bg-slate-950 dark:text-white dark:transition-colors overflow-hidden">
        <div className="max-w-primary mx-auto">
            <SectionHeading title="Featured Project" />
        </div>

        <div className="max-w-primary mx-auto py-24">
            <div className="flex flex-col gap-10">

            <motion.div
            ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-4 extrasmall:flex-col extrasmall:items-center extrasmall:justify-center lg:flex-row">

                <div className="w-1/2 w-full">
                    <img src={projectOne} alt="" />
                </div>

                <div>
                    <div className="relative flex flex-col gap-4">
                        <h3 className="font-inter text-3xl text-primary">Lunar</h3>
                        <p className="font-inter text-base text-primary after:absolute after:w-full after:h-0.5 after:content after:-bottom-3 after:left-0 after:bg-gray-400">Lunar is a sleek, responsive web application built with React.js and styled using Tailwind CSS. It features a modern UI, dynamic components, and a fast, mobile-friendly user experience — perfect for showcasing innovative ideas or building scalable frontends.</p>
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <p className="font-inter text-sm text-primary flex gap-4">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                            <span>Figma</span>
                            <span>React</span>
                        </p>
                        <p className="flex gap-4">
                            <a href="#" className="hover:text-orange-600 hover:transition-colors"><Github /></a>
                            <a href="#" className="hover:text-orange-600 hover:transition-colors"><SquareArrowOutUpRight /></a>
                        </p>
                    </div>
                </div>

            </motion.div>


            <motion.div
            ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-16 text-right extrasmall:flex-col extrasmall:items-center extrasmall:justify-center lg:flex-row">
                <div>
                    <div className="relative flex flex-col gap-4">
                        <h3 className="font-inter text-3xl text-primary">Airfolio</h3>
                        <p className="font-inter text-base text-primary after:absolute after:w-full after:h-0.5 after:content after:-bottom-3 after:left-0 after:bg-gray-400">Airfolio is a lightweight and elegant portfolio template built with React.js and styled using Tailwind CSS. It offers a clean, responsive layout optimized for showcasing personal or professional work with smooth animations and modular components.</p>
                    </div>
                    <div className="flex flex-col items-end gap-4 mt-6">
                        <p className="font-inter text-sm text-primary flex gap-4">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                            <span>Figma</span>
                            <span>React</span>
                        </p>
                        <p className="flex gap-4">
                            <a href="#" className="hover:text-orange-600 hover:transition-colors"><Github /></a>
                            <a href="#" className="hover:text-orange-600 hover:transition-colors"><SquareArrowOutUpRight /></a>
                        </p>
                    </div>
                </div>

                <div className="w-10/12 w-full">
                    <img src={projectTwo} alt="" />
                </div>
                
            </motion.div>

            </div>
            


        </div>

        <OthersProject />


    </section>
  );
}

export default Project