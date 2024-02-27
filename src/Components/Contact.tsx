import React, {  useRef } from 'react'
import { FaRegClipboard } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { MdAttachEmail} from 'react-icons/md'

export const Contact:React.FC = () => {
    
       const textCopiedRef = useRef<HTMLAnchorElement>(null)
       const popupRef = useRef<HTMLDivElement> (null)

    function handleCopy () {
    const copiedData:any = textCopiedRef.current?.innerText ;
    navigator.clipboard.writeText(copiedData);
    popupRef.current!.style.display='block'
    setTimeout(() => {
        popupRef.current!.style.display = 'none'
    }, 1000);
    }
 

  return (
    <>
        <section className=' flex flex-col justify-center items-center mx-auto  '>
            <p className='text-[#87197c] text-3xl font-semibold'>Contact</p>
            <h2 className='capitalize text-xl font-ubuntu font-extrabold mt-5 tracking-wider'>don't hesitate just hit me up! 😊👇</h2>
            <article className=' grid md:flex items-center justify-center gap-6'>
                <div className='flex mt-5 link relative flex-col'>
                    <h1 className='font-nunito text-xl text-[#462255] font-bold text-center flex items-center justify-center gap-4'><MdAttachEmail className='bg-white rounded-full p-2' size={40} color='#3346c0' />Email</h1>
                    <div className='flex justify-center items-center '>
                        <a ref={textCopiedRef} href="mailto:steptoforge@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there!" className=' text-xl hover bg-[#ffffff94] rounded-tl-xl rounded-bl-xl  py-2 px-4 '>steptoforge@gmail.com </a>
                        <button onClick={handleCopy} className='duration-100 animate-pulse ease-in-out bg-[#2d4fd7a8] py-2 px-4 shadow-inner shadow-blue-950 rounded-tr-xl rounded-br-xl invisible copy active:bg-blue-950'><FaRegClipboard color='#ffffff94' size={30}/></button>
                    </div>
                <div ref={popupRef} className='absolute -bottom-[3rem] left-[20%] font-extralight hidden rounded-md p-1 bg-gray-600 text-white text-xl font-ubuntu '>Text copied!</div>
                </div>
                <div className='flex mt-5 link relative flex-col'>
                    <h1 className='font-nunito text-xl text-[#462255] font-bold text-center flex items-center justify-center gap-4'><IoLocation className='bg-white rounded-full p-2' size={40} color='#3346c0' />Location</h1>
                    <p className='text-[#3346c0] text-center mt-4 font-semibold'>Palakkad ,Kerala ,India</p>
                </div>
                <div></div>
            </article>
        </section>

    </>
  )
}
