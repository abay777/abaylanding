import React from 'react';
import { motion} from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';
import { TiHtml5 } from 'react-icons/ti';
import { BiLogoTypescript, BiSolidFileCss } from 'react-icons/bi';
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
    translateY:[-75,15],
    easing:'easeInOutCubic'
  })

  return (
    <>
    <svg className=' w-full md:mt-0 mt-[10rem]' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width="1440" height="330" preserveAspectRatio="none" viewBox="0 0 1440 330">
        <g mask="url(&quot;#SvgjsMask1031&quot;)" fill="none">
            <path d="M 0,99 C 48,83.8 144,14.6 240,23 C 336,31.4 384,138 480,141 C 576,144 624,33.6 720,38 C 816,42.4 864,167.4 960,163 C 1056,158.6 1104,25 1200,16 C 1296,7 1392,97.6 1440,118L1440 330L0 330z" fill="rgba(221, 255, 247, 1)"></path>
            <path d="M 0,285 C 32,275.4 96,235.2 160,237 C 224,238.8 256,293.8 320,294 C 384,294.2 416,238 480,238 C 544,238 576,300 640,294 C 704,288 736,203.2 800,208 C 864,212.8 896,320.4 960,318 C 1024,315.6 1056,204.6 1120,196 C 1184,187.4 1216,273.6 1280,275 C 1344,276.4 1408,217.4 1440,203L1440 330L0 330z" fill="rgba(156, 231, 222, 1)"></path>
        </g>
        <defs>
            <mask id="SvgjsMask1031">
                <rect width="1440" height="330" fill="#ffffff"></rect>
            </mask>
        </defs>
    </svg>
      <section id='aboutme' className='  mt-0 pb-[2rem] bg-[#9ce7de]  '>
      
      <h3 className='font-marker text-center text-3xl md:text-5xl text-[#462255]'>
        <span className='text-[#AA4465] pr-5'>My</span>Skills
      </h3>

      <section className='flex-col    '>
        
        <article  className='flex gap-[3rem] mt-10 justify-center md:flex-nowrap flex-wrap  '>
              <div className='flex gap-5 items-center' ref={parallax.ref}>
                  <TiHtml5 size={70} className='text-orange-600' />
                  <BiSolidFileCss size={70} className='text-blue-500' />
                  <SiTailwindcss size={70} className='text-[#359aff]' />
              </div>
              <div className='flex gap-5 items-center' >
                  <RiJavascriptFill size={70} className='text-yellow-500' />
                  <BiLogoTypescript size={70} className='text-blue-600'/>
              
              </div>
              <div className='flex gap-5 items-center' ref={parallax.ref}>
                  <GrReactjs size={70} className='text-[#2ab1bb]' />
                  <SiRedux size={70} className='text-[#5f2ec0]' />
              </div>
        </article>
        
        <article className=' mt-10 md:flex grid grid-cols-1 justify-evenly p-2'>
                    <motion.article className='flex md:justify-normal justify-center '
                     initial={{translateY:-40, opacity:0}}
                     whileInView={{translateY:0, opacity:1}}
                     transition={{duration:1}}>
                     <motion.img
                        src={abaybg}
                        loading='lazy'
                        alt="Abay sankar"
                        className='w-[24rem] object-fill m-0 '      
                        initial={{ borderRadius:'83% 5% 70% 8%' }}
                        animate={{ borderRadius:'23% 80% 10% 82%' }}
                        transition={{ duration: 14, ease: 'easeInOut' , repeatType:'reverse' ,repeat:Infinity}}
                      />

                    </motion.article>
                   
                  <article className='relative flex-col  '>
                    <p ref={textParallax.ref} className='p-2 pt-[rem] md:p-0 font-medium text-[#462255] flex-col  items-pretty md:text-start text-center  w-[100%] md:w-[30rem]  leading-8 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AA4465" className="bi bi-quote md:-ml-[2rem] size-[1.5rem]" viewBox="0 0 16 16">
                          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                        </svg>
                        As a passionate web developer, I specialize in crafting interactive web experiences using HTML5, CSS3, and JavaScript. 
                        My expertise extends to TypeScript, adding a layer of precision to my code. Leveraging frameworks like React and state management with Redux, 
                        I create scalable and efficient front-end solutions. With a flair for captivating animations 
                        and a keen eye for design using Tailwind CSS, I transform ideas into impactful digital experiences.
                        Let's collaborate and bring your vision to life with innovation and success at the forefront.    
                        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="#AA4465" className="bi bi-quote rotate-180 ml-[15rem]  lg:ml-[12rem] size-[1.5rem]" viewBox="0 0 16 16">
                          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                        </svg>
                    </p>
               
                    <svg className='absolute top-0 md:-top-2 -z-10 opacity-25 md:w-[90%] w-[80%]  lg:w-max' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#93E1D8" d="M41.8,-53.3C53.6,-39.9,62.2,-26.2,68,-9.6C73.8,7,76.7,26.5,69.2,40.4C61.7,54.3,43.8,62.7,26.1,67C8.5,71.3,-8.8,71.5,-25,66.6C-41.3,61.6,-56.4,51.5,-61.2,37.9C-66,24.3,-60.4,7.3,-57.3,-10.1C-54.2,-27.4,-53.5,-45.2,-44.3,-59C-35.2,-72.9,-17.6,-82.9,-1.3,-81.3C15,-79.8,30,-66.7,41.8,-53.3Z" transform="translate(100 100)" />
                    </svg>
                  </article>
                 
        </article>
      
      </section>
      <div className='flex justify-center items-center mt-[7rem] md:mt-10 text-white font-ubuntu font-medium  md:ml-[11rem]'>
      <button className='py-5 px-7 bg-[#462255] rounded-lg text-center hover:bg-[#AA4465] hover:duration-500 capitalize ease-in-out'>let's Collaborate</button>
      </div>
    </section>
    <svg className='rotate-180 w-full' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="330" preserveAspectRatio="none" viewBox="0 0 1440 330">
        <g mask="url(&quot;#SvgjsMask1031&quot;)" fill="none">
            <path d="M 0,99 C 48,83.8 144,14.6 240,23 C 336,31.4 384,138 480,141 C 576,144 624,33.6 720,38 C 816,42.4 864,167.4 960,163 C 1056,158.6 1104,25 1200,16 C 1296,7 1392,97.6 1440,118L1440 330L0 330z" fill="rgba(221, 255, 247, 1)"></path>
            <path d="M 0,285 C 32,275.4 96,235.2 160,237 C 224,238.8 256,293.8 320,294 C 384,294.2 416,238 480,238 C 544,238 576,300 640,294 C 704,288 736,203.2 800,208 C 864,212.8 896,320.4 960,318 C 1024,315.6 1056,204.6 1120,196 C 1184,187.4 1216,273.6 1280,275 C 1344,276.4 1408,217.4 1440,203L1440 330L0 330z" fill="rgba(156, 231, 222, 1)"></path>
        </g>
        <defs>
            <mask id="SvgjsMask1031">
                <rect width="1440" height="330" fill="#ffffff"></rect>
            </mask>
        </defs>
    </svg>
    </>
  
  );
};

