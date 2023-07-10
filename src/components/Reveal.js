import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const targetElement = document.getElementById('targetElement');

    if (targetElement && scrollPosition > targetElement.offsetTop) {
      sideControls.start({ opacity: 1, y: 0 });
    } else {
      sideControls.start({ opacity: 0, y: 75 });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate={mainControls}
       
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0
          },
          visible: {
            left: "100%"
          }
        }}
        initial="hidden"
        animate={sideControls}
     
        transition={{ duration: 0.5, ease:"easeIn" }}
        style={{
          position:"absolute",
          top:4,
          bottom:4,
          left:0,
          right:0,
          background:"var(--brand)",
          zIndex: 20,

        }}
      >
        {children}
      </motion.div>
    </div>
  );
};