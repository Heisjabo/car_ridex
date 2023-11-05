import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const words = [ "THE EASY WAY", "TO TAKEOVER A", "LEASE"]

  const Variants = {
    offscreen: {
     opacity: 0,
    //   y: 60,
    },
    onscreen: {
    //   y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="flex flex-col w-full text-2xl md:text-4xl text-center lg:text-5xl font-semibold mb-4"
    >
      {words.map((word, index) => {
        return <motion.h1 variants={Variants} key={index}>{word}</motion.h1>;
      })}
    </motion.div>
  );
};

export default AnimatedText;
