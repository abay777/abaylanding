import React, {  UIEventHandler, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { motion, useInView } from 'framer-motion'


const variants = {
    open: { opacity: 1 , y:0 ,scale:1 },
    closed: {opacity:0 ,y:'-100%',scale:2 },
    
  }

export const Navbar:React.FC = () => {
    const navStickyRef = useRef<HTMLDivElement>(null)
    const inView = useInView(navStickyRef)
    const [burgerMenu,setBurgerMenu]=useState<boolean>(false);

    const handleBurger:UIEventHandler = ()=>{
        setBurgerMenu(!burgerMenu);
    }

    console.log(inView);
    

  return (
    <nav className='' ref={navStickyRef}>
        <section className={inView?'hidden md:flex  justify-between relative px-4' : 'fixed hidden md:flex justify-between left-0 right-0 z-20 bg-[#9ce7de] px-4 py-1'}>
            <div>
                <h3 className='text-4xl text-gray-800  min-w-[245px] font-marker'>
                    Abay sankar
                </h3>
            </div>
            <div className='  items-center justify-center mt-3 md:hidden' onClick={handleBurger}>
                {burgerMenu ? <IoMdClose size={25}/>:<RxHamburgerMenu size={25} />}
            
            
            </div>
            <div className='ml-6 w-[800px] justify-between hidden md:flex' >
                <ul  className='flex gap-8 items-center font-nunito text-xl text-[#462255] font-bold'>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="#home">Home</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="#aboutme">About Me</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="#projects">Portfolio</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="#contact">Contact</a></li>
                </ul>
                <div className='flex justify-evenly gap-4 items-center mr-4 '>
                    <a href="https://github.com/abay777"> <FaGithub className=' text-[#462255] duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2]' size={25}/></a>
                    <a href="https://www.linkedin.com/in/abay-sankar-s-95796a248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjTcr9q8hSjivlwWM8IrV5A%3D%3D"><FaLinkedin size={25} className=' text-[#462255] duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2]'/></a>

                </div>
            </div>
        </section>
        <section
        className='flex md:hidden  justify-between   fixed z-10 bg-[#DDFFF7] top-0 left-0 right-0' >
            <div>
                <h3 className='text-3xl text-center text-gray-800 mb-4 min-w-[245px] font-marker '>
                    Abay sankar
                </h3>
            </div>
            <div className='flex  items-center justify-center  md:hidden pr-2' onClick={handleBurger}>
                {burgerMenu ? <IoMdClose size={25}/>:<RxHamburgerMenu size={25} />}
            </div>
            <div  className={burgerMenu?' pt-[4rem] absolute top-10 bottom-0  h-[120vh] w-[100%]  flex flex-col md:hidden ease-in-out duration-300 bg-[#DDFFF7]  ':' fixed -top-[100vh]  '}  >
                <motion.ul 
                   animate={burgerMenu ? "open" : "closed"}
                   variants={variants} 
                 className='flex  flex-col gap-6 items-center mt-10 text-3xl font-nunito weight font-bold text-[#462255] '>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="">Home</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="">Portfolio</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="">About Me</a></li>
                    <li className='duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] '><a href="">Contact</a></li>
                </motion.ul>
                <div className='flex  justify-center gap-6 items-center mt-4 '>
                    <a href="https://github.com/abay777"> <FaGithub className='text-[#462255] duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] ' size={40} /></a>
                    <a href="https://www.linkedin.com/in/abay-sankar-s-95796a248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjTcr9q8hSjivlwWM8IrV5A%3D%3D"><FaLinkedin className='text-[#462255] duration-500 ease-in-out hover:scale-150 hover:font-bold hover:text-[#AA4465] active:text-[#9DB5B2] ' size={40}/></a>

                </div>
            </div>
        </section>
    </nav>
  )
}
