import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const Experience = () => {
     const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
  return (
    <section className="py-20 px-8 dark:bg-slate-900 dark:text-white dark:transition-colors overflow-hidden">
        <div className="max-w-primary mx-auto">
            <SectionHeading title="Experience" />
        </div>
        <div className="max-w-primary mx-auto py-16">
            <div className="flex flex-col gap-20">

            <motion.div
            ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-12 extrasmall:flex-col text-center lg:flex-row lg:text-left">
                <div>
                    <div className="relative extra">
                        <div className="after:absolute after:top-0 after:-right-6 after:w-0.5 after:h-44 after:bg-gray-500 after:content extrasmall:after:w-0 extrasmall:after:h-0 extrasmall:after:bg-none lg:after:w-0.5 lg:after:h-44">
                            <div className="flex flex-col gap-2 ">
                            <h3 className="font-inter text-2xl text-primary mt-10">Laravel Developer</h3>
                            <p className="font-inter text-base text-primary after:absolute after:w-48 after:h-0.5 after:content after:bottom-7 after:left-0 after:bg-gray-400">Creative Shaper</p>
                            <p><span className="font-inter text-sm text-primary">Apr 2019 Sep - 2021</span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-6xl lg:max-w-2xl xl:max-w-6xl">
                        <ul className="list-disc flex flex-col gap-4">
                        <li>Welcome to Creative Shaper IT Training Institute. Creative Shaper is one of the latest IT technological based Institutions in Bangladesh</li>
                        <li>Creative Shaper is one of the latest IT technological based Institutions in Bangladesh where academic excellence is a tradition, teaching a passion and building.</li>
                        <li>Creative Shaper is International Based IT Training Center in Bangladesh. Creative Shaper is one of the latest IT technological based Institutions in Bangladesh where academic excellence is a tradition, teaching a passion and building career a habit.</li>
                    </ul>
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
            className="flex items-center gap-12 extrasmall:flex-col text-center lg:flex-row lg:text-left">
                
                <div>
                    <div className="max-w-6xl lg:max-w-2xl xl:max-w-6xl">
                        <ul className="list-disc flex flex-col gap-4">
                        <li>Welcome to Creative IT Training Institute. Creative IT is one of the latest IT technological based Institutions in Bangladesh</li>
                        <li>This IT training institute offers diverse courses designed to propel learners into the digital workforce. With 16 years of experience and over 90,000 trained freelancers, they pride themselves on delivering top-notch training. The institute boasts multiple locations, including Dhaka, Chattogram, and Panchagarh.</li>
                        <li>Creative IT is an institution where empowering the community with an excellent standard of learning is what we desire. We endeavour for the continuous improvement of our leaders who will work to construct a better future.</li>
                    </ul>
                    </div>
                </div>

                <div>
                    <div className="relative extra">
                        <div className="after:absolute after:top-0 after:-left-6 after:w-0.5 after:h-44 after:bg-gray-500 after:content extrasmall:after:w-0 extrasmall:after:h-0 extrasmall:after:bg-none lg:after:w-0.5 lg:after:h-44">
                            <div className="flex flex-col gap-2 ">
                            <h3 className="font-inter text-2xl text-primary mt-10">FrontEnd Developer</h3>
                            <p className="font-inter text-base text-primary after:absolute after:w-48 after:h-0.5 after:content after:bottom-7 after:left-0 after:bg-gray-400">Creative IT Institute</p>
                            <p><span className="font-inter text-sm text-primary">Sep 2021 Apr - 2025</span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </motion.div>

            </div>
        </div>
    </section>
  );
}

export default Experience