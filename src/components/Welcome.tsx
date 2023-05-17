import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0.5 },
};

export const Welcome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      style={{ marginTop: "20px" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className="flex flex-col items-center">
        <h2 className="max-sm:mb-5 sm:mb-20">Tervetuloa</h2>
        <p className="max-sm:text-1xl sm:text-2xl text-center max-sm:p-10">
          Nyylä Network on ainutlaatuinen verkosto, joka on suunniteltu
          keräämään Nyylät yhteen ympäri maailmaa. Missiomme on luoda vahva
          yhteisö, joka kokoaa yhteen kaikki Nyylät, oli kyseessä sitten kokenut
          konkari tai vasta-alkaja nyyläilyssä. Uskomme, että jokaisella
          Nyylällä on lahjoja ja taitoja, jotka ansaitsevat tulla jaetuiksi
          maailmanlaajuisesti.
        </p>
      </div>
    </motion.div>
  );
};
