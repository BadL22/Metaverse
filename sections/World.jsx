'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.padding} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex
    flex-col`}
  >
    <TypingText 
      title="| People on the World"
      textStyles="text-center" />
      <TitleText 
        title={(
        <>
          Track friends around you and invite them
          to play together in the same world
          </>
        )}
        textStyles="text-center"
      />
    
  </motion.div>
  </section>
);

export default World;
