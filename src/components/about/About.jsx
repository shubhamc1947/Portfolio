import { useState, useEffect } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { scrollTopAnimation } from '../../store/utils';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Olá',
  'Привет',
  '你好',
  'こんにちは',
  '안녕하세요',
  'مرحبا',
  'Merhaba',
  'Hej',
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderLetters = (word) => {
    return [...word].map((letter, i) => (
      <motion.span key={i} variants={letterVariants}>
        {letter}
      </motion.span>
    ));
  };

  const letterVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='about'>
      <motion.div
        className='wrapper'
        variants={scrollTopAnimation}
        initial="initial"
        
        whileInView="animate"
      >
        <div className='leftside'>
          <div className='heading'>ABOUT</div>
          <div className='imgcont'>
            <img src='./about.gif' alt='' />
          </div>
        </div>
        <div className='rightside'>
          <motion.div
            className='greeting-container top'
            key={greetings[index]}
            variants={letterVariants}
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
          >
            {renderLetters(greetings[index])}
          </motion.div>
          <div className='bottom'>
            I&apos;m <span className='red'>Shubham Chaturvedi</span>, a Full Stack Developer proficient in JavaScript, Typescript, ReactJs, NextJs, NodeJs. I excel in React, Express, and Web Socket and Web RTC. I&apos;m passionate about building innovative projects and always open to exciting opportunities.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
