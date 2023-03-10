"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText tittle="| Panaverse Dao" textStyles="text-center" />
      <TitleText tittle={ <>Choose the world you want <br className="md:block hidden"/> to explore</> } textStyles="text-center" />
    </motion.div>
  </section>
);

export default Explore;
