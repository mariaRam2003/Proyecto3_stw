import React from 'react';
import './styles/Banner.css';
import Image from '../assets/Avatar.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section 
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'
            >
              MARIA <span>RAMIREZ</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className=''>
              <TypeAnimation 
                sequence={[
                  '<Developer/>',
                  2000,
                  '<Designer/>',
                  2000,
                  '<Programmer/>',
                  2000,
                  '<Student/>',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                repeat={Infinity}
              /></span>
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg max-auto lg:mx-0'
            >
              info mia bla bla bla
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contáctame</button>
              <Link to="work" className="text-gradient btn-link">
                Mi Portafolio
              </Link>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/mariaRam2003' target="_blank">
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/mariarmrzg/' target="_blank">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* imagen */}
          <motion.div 
              variants={fadeIn('down', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;