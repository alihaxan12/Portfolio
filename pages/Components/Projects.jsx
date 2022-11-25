
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Projects</p>
            <h1 className='text-4xl py-4 text-gray-600 font-semibold'>What I have Built</h1>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl
                                shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#789dff]'>
                    <Image src='/images/myapp.JPG' width={550} height={350}
                            className='rounded-xl group-hover:opacity-10' alt='/'  />       
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h1 className='text-xl text-white tracking-wider font-bold'>Social Network</h1>
                        <p className='pb-4 text-xl pt-2 text-white text-center'>React Js</p>
                         <Link href='/Social'><p className='text-center py-3 rounded-lg bg-white
                         text-gray-700 font-bold text-lg cursor-pointer'>More Info</p></Link>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl
                                shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#789dff]'>
                    <Image src='/images/magnit.JPG' width={550} height={350}
                            className='rounded-xl group-hover:opacity-10' alt='/'   />       
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h1 className='text-xl text-white tracking-wider font-bold'>Food Business</h1>
                        <p className='pb-4 text-xl pt-2 text-white text-center'>React Js</p>
                        <Link href='/Business'><p className='text-center py-3 rounded-lg bg-white
                         text-gray-700 font-bold text-lg cursor-pointer'>More Info</p></Link>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-[300px] w-full shadow-xl
                                shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#789dff]'>
                    <h1 className='text-center text-4xl text-slate-900 group-hover:hidden'>Comming Soon..</h1>     
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h1 className='text-xl text-white tracking-wider font-bold'>Website</h1>
                        <p className='pb-4 text-xl pt-2 text-white text-center'>React Js</p>
                        <Link href="/" > <p className='text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> More Info</p> </Link>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-[300px] w-full shadow-xl
                                shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#789dff]'>
                    <h1 className='text-center text-4xl text-slate-900 group-hover:hidden'>Comming Soon..</h1>     
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h1 className='text-xl text-white tracking-wider font-bold'>Website</h1>
                        <p className='pb-4 text-xl pt-2 text-white text-center'>React Js</p>
                        <Link href="/" > <p className='text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> More Info</p> </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
