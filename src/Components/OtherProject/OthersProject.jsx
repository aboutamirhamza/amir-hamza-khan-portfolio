import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from '../SectionHeading/SectionHeading';
import OthersProjects from '../OthersProjects/OthersProjects';
import OthersProjectOne from '../../assets/img/others_project/one.jpg';
import OthersProjectTwo from '../../assets/img/others_project/two.jpg';
import OthersProjectThree from '../../assets/img/others_project/three.jpg';
import OthersProjectFour from '../../assets/img/others_project/four.jpg';
const OthersProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
        <motion.div
        ref={ref}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.25 }}
        className="max-w-primary mx-auto overflow-hidden">
            <SectionHeading title="Other Project" />
            <div className="grid grid-cols-2 gap-10 items-center  py-16 extrasmall:grid-cols-1 md:grid-cols-2">
                <OthersProjects img={OthersProjectOne} title="One Academy" desc="One Academy is an online learning platform where students can enroll in courses on web development, programming, digital marketing, and more. The platform includes features like course enrollment, live classes, quizzes, and certificate generation." tagone="HTML" tagtwo="CSS" tagthree="JS" tagfour="Figma" tagfive="React"  />
                <OthersProjects img={OthersProjectTwo} title="Digital Agency" desc="A full-service digital agency website where clients can request services such as web development, graphic design, SEO, and social media marketing. The system includes project management, team collaboration, and invoice generation functionalities." tagone="HTML" tagtwo="CSS" tagthree="JS" tagfour="Figma" tagfive="React"  />
                <OthersProjects img={OthersProjectThree} title="Project Management" desc="A professional tool designed to help companies or teams plan, track, and manage their work. Key features include task management, time tracking, team assignments, progress reporting, and notification systems." tagone="HTML" tagtwo="CSS" tagthree="JS" tagfour="Figma" tagfive="React"  />
                <OthersProjects img={OthersProjectFour} title="ERP Management" desc="A comprehensive ERP solution for managing business operations. It includes modules for accounting, inventory management, HR management, sales reporting, payroll, and more. This system automates internal processes and improves operational efficiency." tagone="HTML" tagtwo="CSS" tagthree="JS" tagfour="Figma" tagfive="React"  />
            </div>
        </motion.div>
    </>
  )
}

export default OthersProject