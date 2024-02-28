import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer:React.FC = () => {
  return (
    <footer  className='bg-[#9ce7de] grid md:flex justify-evenly items-end p-8 mt-[5rem] '>
        <div className='text-[.9rem] md:text-2xl font-bold text-[#462255]  ' >
        Copyright © 2024. All rights are reserved
        </div>
        <div className='flex justify-evenly gap-4 text-[#462255]  mt-4 md:mt-0'>
            <a href="https://github.com/abay777"><FaGithub className='hover:text-[#AA4465] hover:scale-125 ease-in-out duration-500' size={30}/></a>
            <a href="https://www.linkedin.com/in/abay-sankar-s-95796a248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOrQVQU6QnC%2BV5GNTYq%2B5Q%3D%3D"><FaLinkedin className='hover:text-[#AA4465]  hover:scale-125 ease-in-out duration-500' size={30}/></a>
        </div>
    </footer>
  )
}
