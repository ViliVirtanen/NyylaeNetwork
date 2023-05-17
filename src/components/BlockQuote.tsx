import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const BlockQuote = ({
  side,
  text,
  creator,
  image,
}: {
  side: "left" | "right";
  text: string;
  creator: string;
  image: string;
}) => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, x: side === "left" ? -300 : 300 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const Blockquote = () => {
    return (
      <blockquote className="otro-blockquote max-sm:w-5/6 sm:w-4/6">
        {text}
        <span>~ {creator}</span>
      </blockquote>
    );
  };
  return (
    <motion.div
      style={{ marginTop: "20px" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className="flex flex-row items-center justify-center flex-wrap">
        {side === "right" && <Blockquote />}
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <div
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110 max-sm:w-[90vw] sm:w-[300px] max-sm:h-[90vw] sm:h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              fill
              alt="Nyylä Network"
              style={{ objectFit: "cover" }}
              src={image}
            />
          </div>
        </div>
        {side === "left" && <Blockquote />}
      </div>
    </motion.div>
  );
};
