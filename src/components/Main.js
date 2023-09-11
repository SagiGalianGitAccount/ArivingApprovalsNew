import React from "react";
import Lottie from "lottie-react";
import heartAnimation from "../assets/heart_animation.json";
import balloonsAnimation from "../assets/baloons.json";
import { motion } from "framer-motion";

const Main = ({name, date, location, otherDetails}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-[30px]">
      <Lottie
        className="w-[60%] md:w-[30%] lg:w-[20%]"
        animationData={heartAnimation}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="font-bold text-5xl"
      >
        {name}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="font-medium text-5xl text-[#7ba7b3]"
      >
        חוגג בר מצווה
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <h1 className="font-medium text-3xl mb-2 mt-2">
          אנו שמחים ונרגשים להזמין אתכם לחגוג עמנו
        </h1>
        <h1 className="font-mono text-5xl mb-3">{date}</h1>
        <h1 className="font-medium text-2xl">{location}</h1>
        <h1 className="font-bold text-2xl pt-2">{otherDetails}</h1>
        <h1 className="font-medium text-xl mt-3 mb-3">נשמח לראותכם</h1>
    
      </motion.div>
      <Lottie
        className="w-[60%] md:w-[30%] lg:w-[20%] mb-[20px]"
        animationData={balloonsAnimation}
      />
    </div>
  );
};

export default Main;
