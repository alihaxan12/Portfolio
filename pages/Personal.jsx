import React from 'react'

const Personal = () => {
  return (
    <div className='w-full h-sceen h-full m-auto '>
        <div className='md:w-[600px] w-full  mx-auto absolute top-[30%] md:left-[30%] '>
          <div className='p-5 border items-center border-[#5651e5] rounded-lg  '>
            <h1 className='text-center border rounded-xl text-2xl font-semibold py-5'>Account login</h1>
          <form>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'> Email</label>
                <input type="email" className='border-2 rounded-lg p-3  border-gray-300' />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'> Password</label>
                <input type="password" className='border-2 rounded-lg p-3  border-gray-300' />
              </div>
              <div className='flex gap-5 items-center justify-center m-auto'>
                <button className='w-[30%]  py-4 text-slate-900 font-bold rounded-2xl mt-4 shadow shadow-gray-400 '>Login</button>
                <button className='w-[30%]  py-4 text-slate-900 font-bold rounded-2xl mt-4 shadow shadow-gray-400 '>Sign Up</button>
              </div>
              <p className='text-slate-700 font-bold ml-28 underline cursor-pointer py-4'>Forgot Password</p>
             </form>
          </div>
        </div>
    </div>
  )
}
export default Personal;