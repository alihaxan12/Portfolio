import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import { BsFillPersonDashFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { HiChevronDoubleLeft, HiChevronDoubleUp, HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from 'next/link';


const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen'>
        <div className='max-w-[1240px] m-auto py-16 px-2 w-full '>
            <p className='text-xl track-widest uppercase text-[#5651e5]'>Contact</p>
            <h1 className='text-4xl py-4 text-gray-600 font-semibold'>Get in Touch</h1>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl py-4 px-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className="rounded-xl hover:scale-105 ease-in duration-300" 
                            src='/images/laptop.jpg'
                            width={500} 
                            height={350}  alt='/' />
                        </div>
                        <div>
                            <h1 className='uppercase text-3xl py-2 text-gray-600 font-bold'>Hassan ali</h1>
                            <p className='text-xl tracking-widest'>Front-End Developer</p>
                            <p className='py-4 tracking-wider tracking-#'>I am available for freelancer or full time position. Contact me and let&apos;s talk</p>
                        </div>
                        <div>
                        <p className=' uppercase pt-8 text-2xl tracking-widest'>Connect me</p>
                            <div className='flex justify-between  items-center py-6 max-w-[330px]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-75'>
                                    <FaFacebook size={20}/>
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
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Name</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Mobile No</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Email</label>
                                <input type="email" className='border-2 rounded-lg p-3  border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Subject</label>
                                <input type="text" className='border-2 rounded-lg p-3  border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Message</label>
                                <textarea  className='border-2 rounded-lg p-3  border-gray-300' rows={10} />
                            </div>
                            <button className='w-full py-4 text-gray-100 font-bold rounded-lg mt-4 bg-gradient-to-r from-[#5651e4] to-[#789dff] '>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <Link href="/" ><div className='flex justify-center py-12'>
                
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-75'>
                    <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
                </div>
            </div></Link>
            
        </div>
     
    </div>
  )
}
export default Contact;