import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from '../SectionHeading/SectionHeading'

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section className="dark:bg-slate-950 dark:text-white dark:transition-colors overflow-hidden">
        <div className="max-w-primary mx-auto px-6 py-20">
            <SectionHeading title="Contact" />

            <form action="" method="">
                <div className="flex gap-10 items-center justify-between py-20 extrasmall:flex-col extrasmall:gap-6 md:flex-row">
                <motion.input
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                type="text" name="username" placeholder="Type Your Name . . ." className="w-full p-4 rounded-md border border-blue-600 border-solid focus:border focus:outline-none focus:border-orange-600 dark:bg-slate-950 dark:text-white dark:focus:border-green-600 dark:transition-colors" required />
                <motion.input
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                type="email" name="email" placeholder="Type Your Email . . ." className="w-full p-4 rounded-md border border-blue-600 border-solid focus:border focus:outline-none focus:border-orange-600 dark:bg-slate-950 dark:text-white dark:focus:border-green-600 dark:transition-colors" required />
            </div>
            <div>
                <motion.textarea
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                name="message" id="message" rows="10" placeholder="Write Message . . ." className="w-full p-4 rounded-md border border-blue-600 border-solid focus:outline-none focus:border-orange-600 dark:bg-slate-950 dark:text-white dark:focus:border-green-600 dark:transition-colors"></motion.textarea>
            </div>
            <div className="w-full flex justify-center py-8">
                <motion.a
                ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
                className="w-4/5 px-6 py-4 text-center text-primary text-xl cursor-pointer rounded-md border border-blue-600 border-solid hover:border-orange-600 hover:bg-orange-600 hover:text-white hover:transition-colors dark:hover:bg-green-800 dark:hover:border-green-800 dark:transition-colors">Send Message</motion.a>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact