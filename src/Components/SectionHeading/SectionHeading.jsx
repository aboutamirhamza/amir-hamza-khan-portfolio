import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SectionHeading = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
    <motion.div
    ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.15 }}
    className="heading">
        <h3 className="heading_content">{props.title}</h3>
    </motion.div>
    </>
  );
}

export default SectionHeading