
import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className=' col-span-2'>
                <p className='uppercase py-4 font-semibold text-xl tracking-widest text-[#5651e5]'>About</p>
                <h1 className=' text-5xl py-2 text-gray-600'>Who I Am</h1>
                <p className="py-2 text-xl text-gray-600">
                    I have spent the many years in the  working as a 
                    professional photo ghraphic and video editing. i have always has a knack for  
                    technology and working with computers. In 2018 i started working with Html and CSS to make some minor 
                    edites on a small business website that i was operating. what i  
                    thought was just a few small edits turned into a love for programming.
                </p>
                <p className='py-2 text-xl text-gray-600'>
                    Then I started freelancing to enhanc my income. I am now spending my time
                    building projects with React JS, WordPress, and learning new technologies.
                </p>
            </div>
            <div  className="shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105
                 ease-in duration-300">
            <Image
                 src="/images/Profile.png"
                 alt="Picture of the author"
                 width={400}
                 height={450}
                 className="rounded-xl"
                 />
            </div>
        </div>
    </div>
  )
}
export default About;
