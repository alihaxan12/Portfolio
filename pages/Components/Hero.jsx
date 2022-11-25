import {AiFillAccountBook, AiOutlineClose, AiOutlineCloseSquare, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaFacebook, FaFacebookF, FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import {BsFillPersonLinesFill, BsFillPersonPlusFill} from 'react-icons/bs';

import React from 'react'

export const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
        <div className='max-w-[1240px]  w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div >
                <p className='uppercase text-xl tracking-widest text-gray-600 py-4'>let&apos;s build somthing together</p>
                <h1 className='text-5xl text-gray-600 font-bold py-4  '>Hi, I&apos;m  <span className='text-[#5651e5]'>Client </span></h1>
                <h1 className='text-5xl text-gray-600 font-bold'>A Front End Web Developer </h1>
                <p className=' text-xl tracking-widest text-gray-600 py-4'>
                    I&apos;m a front-end web developer specializing in building (and
                    occasionally designing) exeptional degital experiencces. Currently,
                    I&apos;m focused on building responsive front-end web applicatins while 
                    learning back-end technologies.
                </p>
                <div className='flex justify-between m-auto items-center py-4 max-w-[330px]'>
                    <div  className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-75'>
                        <FaFacebookF size={20} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150  ease-in duration-75'>
                        <FaLinkedin size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-75'>
                        <FaWhatsapp  size={20}/>
                     </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-75'>
                        <BsFillPersonLinesFill size={20}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
