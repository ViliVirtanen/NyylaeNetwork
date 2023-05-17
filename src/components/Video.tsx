import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0.5 },
};

export const Video = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="flex flex-col items-center max-sm:px-5 w-full justify-center mt-3">
      <motion.div
        style={{ marginTop: "20px" }}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <div className="flex flex-col items-center">
          <h2 className="mb-10">Nyyläilyä</h2>
          <video width="100%" controls poster="placeholder.jpg">
            <source
              src="https://users.aalto.fi/~maculue1/video/titeenit.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-5 font-bold">
            Esimerkki siitä, mitä Nyylät ovat saaneet aikaan
          </p>
        </div>
      </motion.div>
    </div>
  );
};
