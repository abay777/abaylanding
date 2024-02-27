import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer:React.FC = () => {
  return (
    <footer  className='bg-[#9ce7de] grid md:flex justify-evenly items-end p-8 mt-[5rem] '>
        <div className='text-[.9rem] md:text-2xl font-bold text-[#462255]  ' >
        Copyright © 2024. All rights are reserved
        </div>
        <div className='flex justify-evenly gap-4 text-[#462255] mt-4 md:mt-0'>
            <a href=""><FaGithub size={30}/></a>
            <a href=""><FaLinkedin size={30}/></a>
        </div>
    </footer>
  )
}
