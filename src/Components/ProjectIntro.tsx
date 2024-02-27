


import { projects } from '../datas/projects';
import { motion } from 'framer-motion';

export const ProjectIntro: React.FC = () => {



  return (
    <>
       <section 
       className='-mt-[20rem] pt-[10rem] bg-coding-img' >
        <h1 className='bg-[#00000020] text-5xl text-white first-letter:text-[#AA4465] text-center mx-auto capitalize font-bold font-nunito mt-[10rem]' >MY projects 🍫</h1>
         
         {
          projects.map((project ,index)=>(
            <motion.article 
             initial={{opacity:0,translateX:-100}}
             whileInView={{opacity:1 , translateX:0}}
             transition={{ease:'easeInOut' ,delay:1}}
            key={index} className='flex-col justify-center items-center py-10' >
          <div className='flex justify-start p-2 md:pl-7 gap-5 md:gap-10 text-center mt-10 items-center z-100'>
            <h2 className='text-[#48bf39] font-marker font-extrabold text-5xl  md:text-7xl '>#{index + 1}</h2>
            <h3 className='text-white font-nunito font-bold text-4xl md:text-5xl flex justify-between items-center '>{project.name}
            </h3>
            <a href={project.link} >
              <button   className='p-1 md:p-2 bg-[#3d2592] hover:bg-[#150f29] capitalize  text-white  text-xl rounded-xl font-nunito font-medium text-center ml-5 md:ml-10 active:bg-[#3d2592]capitalize '>
                visit live
              </button>
            </a>
          
          </div>
          <img src={project.img} alt=" renting car website"  className='rounded-xl w-[80%] md:w-[80%] lg:w-[60%] mx-auto mt-5 ' />
          <main>
            <h1 className='text-[1rem] md:text-2xl lg:text-3xl  font-nunito font-bold p-2 text-center mx-auto mt-4 text-[#ea459d]'>{project.subhead}  </h1>
            <p className='text-[.95rem] lg:text-xl text-white text-pretty p-4 mx-auto font-medium bg-[#00000055]'>{project.discription}</p>
              <div className='flex justify-center gap-10 bg-[#ffffff7f] p-5 text-[#322887] '>
               
              {project.icons.map((Icon, index) => (
                <Icon key={index} size={45} />
            ))}
               
              </div>
          </main>
         </motion.article>

          ))
          
         }
         
         
      </section>
      <svg className='rotate-180 w-full' xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="330" preserveAspectRatio="none" viewBox="0 0 1440 330">
          <g mask="url(&quot;#SvgjsMask1025&quot;)" fill="none">
              <path d="M 0,99 C 48,83.8 144,14.6 240,23 C 336,31.4 384,138 480,141 C 576,144 624,33.6 720,38 C 816,42.4 864,167.4 960,163 C 1056,158.6 1104,25 1200,16 C 1296,7 1392,97.6 1440,118L1440 330L0 330z" fill="rgba(156, 231, 222, 0.42)"></path>
              <path d="M 0,285 C 32,275.4 96,235.2 160,237 C 224,238.8 256,293.8 320,294 C 384,294.2 416,238 480,238 C 544,238 576,300 640,294 C 704,288 736,203.2 800,208 C 864,212.8 896,320.4 960,318 C 1024,315.6 1056,204.6 1120,196 C 1184,187.4 1216,273.6 1280,275 C 1344,276.4 1408,217.4 1440,203L1440 330L0 330z" fill="rgba(0, 0, 0, 0)"></path>
          </g>
          <defs>
              <mask id="SvgjsMask1025">
                  <rect width="1440" height="330" fill="#ffffff"></rect>
              </mask>
          </defs>
      </svg>
    </>
  );
};