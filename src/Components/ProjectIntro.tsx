

import { MouseEventHandler } from 'react';
import { projects } from '../datas/projects';

export const ProjectIntro: React.FC = () => {

//  const handleClick:MouseEventHandler<HTMLButtonElement> = ( ) => {
//   console.log('clicked')
//   window.location.href = 'https://rentingcar.netlify.app/'  
//  }

  return (
    <>
       <section className='-mt-[20rem] pt-[10rem] bg-coding-img' >
        <h1 className='bg-[#00000020] text-5xl text-white first-letter:text-[#AA4465] text-center mx-auto capitalize font-bold font-nunito mt-[10rem]' >MY projects 🍫</h1>
         
         {
          projects.map((project ,index)=>(
            <article key={index} className='flex-col justify-center items-center py-10' >
          <div className='flex justify-start pl-7 gap-10 text-center mt-10 items-center z-100'>
            <h2 className='text-[#311d78] font-marker font-extrabold text-7xl'>#{index + 1}</h2>
            <h3 className='text-white font-nunito font-bold text-5xl flex justify-between items-center '>{project.name}
            </h3>
            <a href={project.link} >
              <button   className='p-2 bg-[#3d2592] hover:bg-[#150f29]  text-white text-xl rounded-xl font-nunito font-medium text-center ml-10 active:bg-[#3d2592]capitalize '>
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
         </article>

          ))
          
         }
         
         
      </section>
      
    </>
  );
};