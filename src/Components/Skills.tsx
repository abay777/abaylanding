import React from 'react';
import { motion } from 'framer-motion';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { TiHtml5 } from 'react-icons/ti';
import { BiSolidFileCss } from 'react-icons/bi';
import { GrReactjs } from 'react-icons/gr';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import abaybg from '../assets/abay with bg.png';

export const Skills: React.FC = () => {

  const parallax = useParallax<HTMLDivElement>({
    rotateY: [0, 360],
  });

  const textParallax = useParallax<HTMLDivElement>({
    opacity:[-5,5],
    translateY:[-100,15],
    easing:'easeInOutCubic'
  })

  return (
    <section className='border-t-2 border-[#ffa69e] border-solid mt-[13rem] md:mt-0 '>
      <h3 className='font-marker text-center text-3xl md:text-5xl text-[#462255]'>
        <span className='text-[#AA4465] pr-5'>My</span>Skills
      </h3>

      <section className='flex-col    '>
        
        <article  className='flex gap-[1rem] mt-10 justify-center  '>
              <div className='flex gap-16 items-center' ref={parallax.ref}>
                  <TiHtml5 size={100} className='text-orange-600' />
                  <RiJavascriptFill size={100} className='text-yellow-500' />
              </div>
              <div className='flex gap-16 items-center' >
                  <BiSolidFileCss size={100} className='text-blue-500' />
                  <SiTailwindcss size={100} className='text-[#359aff]' />
              </div>
              <div className='flex gap-16 items-center' ref={parallax.ref}>
                  <GrReactjs size={100} className='text-[#2ab1bb]' />
                  <SiRedux size={100} className='text-[#5f2ec0]' />
              </div>
        </article>
        
        <article className='flex mt-10 justify-evenly'>
                    <motion.article className='flex justify-between '
                     initial={{translateY:-100, opacity:0}}
                     whileInView={{translateY:0, opacity:1}}
                     transition={{duration:1}}>
                      <img src={abaybg} alt="" className='w-[24rem] object-fill rounded-lg m-0'  />
                    </motion.article>
                  <article className='relative'>
                    <p ref={textParallax.ref} className=' font-medium text-[#AA4465] flex justify-center items-center text-start  w-[30rem]  leading-8 '>
                      As a passionate web developer, I bring a dynamic skill set to the table. My expertise spans the latest technologies, including HTML5, CSS3, and JavaScript, allowing me to craft interactive and visually stunning web applications.
                      Utilizing frameworks like React and state management with Redux, I build scalable and efficient front-end solutions. Additionally, my proficiency in Tailwind CSS ensures a seamless and responsive user experience.
                      Let's collaborate to transform ideas into impactful digital experiences. Your success is my priority.
                    </p>
                    <svg className='absolute -top-16 -z-10 opacity-25' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#93E1D8" d="M41.8,-53.3C53.6,-39.9,62.2,-26.2,68,-9.6C73.8,7,76.7,26.5,69.2,40.4C61.7,54.3,43.8,62.7,26.1,67C8.5,71.3,-8.8,71.5,-25,66.6C-41.3,61.6,-56.4,51.5,-61.2,37.9C-66,24.3,-60.4,7.3,-57.3,-10.1C-54.2,-27.4,-53.5,-45.2,-44.3,-59C-35.2,-72.9,-17.6,-82.9,-1.3,-81.3C15,-79.8,30,-66.7,41.8,-53.3Z" transform="translate(100 100)" />
                    </svg>
                  </article>
        </article>
      
      </section>
    
     
    </section>
  );
};

