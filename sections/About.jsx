'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* add the gradient color */}
    <div className="z-0 gradient-02" />

    {/* add the inner container */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* the motion typing header text */}
      <TypingText title="| About Metaversus" textStyles="text-center" />

      {/* the motion text with span for all the special words */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metarvrtise</span> is a new
        ARVRtising channel that allows you remove the ego and enjoy doing 
        business in the virtual world. Network, chat, chill while attending
        public or private events that can lead to new partnerships in the
        real world, because anything is possible {' '}
        <span className="font-extrabold text-white">
          when you use your imagination
        </span>{' '}
        in the business world{' '}
         or in the Metarvrtise world you want ARVRtise in. We have one rule
         Positive vibes only, were all adults so lets act accordingly. 
      </motion.p>

      {/* the motion arrow down image */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.7, 1)}
        animate={{ y: ['50%', '-50%'] }}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
