
import React from 'react'
import Image from 'next/image'



 const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] h-full  justify-center mx-auto'>
           <p className='text-xl tracking-widest uppercase font-semibold text-[#5651e5]'>Skills</p>
           <h1 className='text-4xl py-4 text-gray-600 font-semibold'>What I can do</h1>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-4'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/Html.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>HTML</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/CSS.png"
                                alt='/'
                                width={230}
                                height={230}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>CSS</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/JS.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>Javascript</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/Wordpress.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>WordPress</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/react.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>React</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/Tailwind.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>TailwindCSS</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/nextjs.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>Next.Js</h1>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src="/images/PS.png"
                                alt='/'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-semibold'>Graphics</h1>
                        </div>
                    </div>
                </div>

           </div>
        </div>
    </div>
  )
}
export default Skills;