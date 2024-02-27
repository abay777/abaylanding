import React from 'react'
import abay from '../assets/abay profile.png'
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'

export const Hero:React.FC = () => {
  return (
  
  <section className='h-[30rem] font-nunito flex flex-col-reverse justify-evenly items-center md:flex-row pt-[8rem] md:pt-0 md:justify-evenly md:items-center -mb-[10rem] md:mt-0  mt-10'>
    <motion.article 
     initial={{opacity:0 , y:'100%'}}

      transition={{ ease:'easeInOut', duration: 1}}
      whileInView={{opacity:1, y:0}}
    className='px-[3rem] text-[#FFA69E] font-medium text-xl font-ubuntu flex flex-col justify-center items-center '>
        <h2 className='text-3xl md:text-5xl font-bold tracking-wider text-[#AA4465] font-nunito'>
            Hey I'm Abay sankar
        </h2>
        <h3  className='mt-8 font-bold text-3xl'>I'm a    
              <ReactTyped 
                className='font-bold text-2xl md:text-3xl text-[#462255] pl-2' 
                strings={[' Frontend Developer',' Freelancer']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />  </h3>

        <h4 className='text-2xl mt-2 '>Based In India,Kerala</h4>
        <p className='text-xl mt-2'>passionately turning designs to webpages....</p>
        <article 
        className='mt-6 flex justify-start '>
          <motion.button
          initial={{opacity:0 , scale:0,y:'100%'}}
          transition={{ease:'easeInOut', duration:2}}
          animate={{opacity:1, scale:1, y:0}}
          whileHover={{
            scale: 1.2,
            transition: {ease:'easeInOut', duration: .3 },
          }}
          whileTap={{ scale: 0.5 }}

           className='rounded-md bg-[#AA4465] p-2 text-[#fff] font-marker hover:bg-[#462255]'>
            Hire mE
           </motion.button>
          <motion.button
           initial={{opacity:0 , scale:0 ,y:'-100'}}
           whileHover={{
            scale: 1.2,
            transition: {ease:'easeInOut', duration: .3 },
          }}
           transition={{ease:'easeInOut', duration:2}}
           animate={{opacity:1, scale:1, y:0}}
           whileTap={{ scale: 0.9 }}
           className='rounded-md bg-[#AA4465] p-2 text-[#fff] font-marker ml-4 hover:bg-[#462255]'>Contact</motion.button>

        </article>
    </motion.article>
    <motion.article 
    initial={{opacity:0 , y:'50%',scale:0.5}}
    transition={{ease:'easeInOut', duration: 1.2}}
    whileInView={{opacity:1, y:0, scale:1}}>
        <img src={abay} alt="picture of abay-sankar" className='size-[25rem]'/>
    </motion.article>
   

  </section>
  
  )
}
