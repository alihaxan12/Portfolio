import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillRecordCircleFill, BsRecord2, BsRecord2Fill } from 'react-icons/bs';
 const Business = () => {
  return (
    <div id='business' className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src='/images/myapp.JPG' alt='website'  />
                <div className='absolute  top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h1 className='text-3xl font-bold text-white'>Food Business</h1>
                <p className='text-xl '>React JS / Tailwind </p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h1 className='text-3xl'>Project</h1>
                    <p className='text-xl text-[#5651e5] py-4'>Overview</p>
                    <p className='text-lg tracking-wide text-justify'>
                        This  project is based on social networking. in this project you can share you 
                        life moments with others. You can like and write comments on your friends 
                        posts and react with emojies. you can conversate with your friends in private and 
                        in a group. Also you can share your video moments and tell the friend about your home
                        parties. you able to config your profile and setting will help you to secure your profile 
                        from anomious. So this is verty intresting app to give enjoment in your life.
                    </p>
                    <button className=' px-8 py-2 mt-4 mr-8  text-gray-100 font-bold rounded-lg  bg-gradient-to-r from-[#5651e4] to-[#789dff]'>Comment</button>
                    <button className=' px-8 py-2 mt-4 mr-8  text-gray-100 font-bold rounded-lg  bg-gradient-to-r from-[#5651e4] to-[#789dff]'>Share</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl'>
                    <div className='p-2 '>
                        <p className='text-xl text-center font-bold'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                           <p className='text-gray-600 py-2 flex items-center '> <BsRecord2Fill /> React</p>
                                              
                           <p className='text-gray-600 py-2 flex items-center '> <BsRecord2Fill/> Tailwind</p>
                                              
                           <p className='text-gray-600 py-2 flex items-center '> <BsRecord2Fill/> Javascrip</p>
                                       
                           <p className='text-gray-600 py-2 flex items-center '> <BsRecord2Fill/> Google API</p>
                        </div>
                    </div>
                </div>
                <Link  href="/#projects"> <p className='text-sky-900 font-semibold underline cursor-pointer'> Back</p></Link>
            </div>
    </div>
  )
}
export default Business;
