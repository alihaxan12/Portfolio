import {AiFillAccountBook, AiOutlineClose, AiOutlineCloseSquare, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import {BsFillPersonLinesFill, BsFillPersonPlusFill} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Navbar = () => {
    const [nav, setNav]     = useState(false);
    const [navbg, setNavbg]  = useState('#ecf0f3');
    const[linkColor, setLinkColor]  = useState('#1f2937')
    const router = useRouter();
    
    useEffect(()=>{
        if(
            router.asPath === '/Social' ||
            router.asPath === '/Business' 
        ){
            setNavbg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavbg('#ecf0f3')
            setLinkColor('#1f2937')

        }
    },[router])

    const handleNav = () =>{
        setNav(!nav);
    }
    return (
        <div style={{backgroundColor:`${navbg}`}} className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
                <Link href='/'><h1 className=" cursor-pointer text-[#1f2937] text-4xl font-bold">Portfolio</h1></Link>
                
                 <div>
                    <ul className="hidden md:flex ">
                        <Link href='/'>
                            <li style={{color:`${linkColor}`}}  className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b" > Home</li>
                        </Link>
                        <Link href='/#about' scroll={false}><li style={{color:`${linkColor}`}}   className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">About</li></Link>
                        <Link href='/#skills' scroll={false}><li style={{color:`${linkColor}`}}   className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">Skills</li></Link>
                        <Link href='/#projects'scroll={false}><li style={{color:`${linkColor}`}}   className=" cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">Projects</li></Link>
                        <li style={{color:`${linkColor}`}}  className="cursor-pointer ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">
                        <Link href='/#contact' scroll={false}> Contact  </Link> 
                        </li>
                       
                       
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={20}/>
                </div>                        
                </div>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
                    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500 '
                    : 'fixed left-[-100%] p-10 ease-in duration-500'}>
                        <div>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className="text-[#1f2937] text-3xl font-bold">Next App</h1>
                                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-200 my-4'>
                                <p>lets&apos;s build somthing legendary together </p>
                            </div>
                        </div>
                        <div className='flex py-4 flex-col'>
                            <ul className='uppercase'>
                                <Link  onClick={()=>setNav(false)} href="/" className="p-4 text-sm"><li>Home</li> </Link>
                                <Link onClick={()=>setNav(false)} href="/#about"className="p-4 text-sm"><li>About</li> </Link>
                                <Link onClick={()=>setNav(false)} href="/#skills"className="p-4 text-sm"><li>skills</li> </Link>
                                <Link onClick={()=>setNav(false)} href="/#projects"className="p-4 text-sm"><li>Projects</li> </Link>
                                <Link onClick={()=>setNav(false)} href="/#contact"className="p-4 text-sm"><li>Contact</li> </Link>
                            </ul>
                            <div className='pt-40 '>
                                <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaFacebook/>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn/>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaWhatsapp/>
                                    </div>
                                    <Link href='/'><div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill/>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Navbar;