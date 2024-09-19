import React from 'react'
import registration from '../assets/registration.png'

const Login = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 flex justify-end mr-[70px] mt-[225px]'>
            <div>
                <h2 className=' font-nun text-[#11175D] font-bold text-[34px]'>Get started with easily register</h2>
                <p className=' font-nun text-[20px] text-[#808080]'>Free register and you can enjoy it</p>
                <div className='h-[100px] w-[368px] mt-[40px]'>
                    <input className='h-full w-full rounded-lg border border-[#707070] outline-none ' type="text" />
                </div>
            </div>
        </div>
        <div className='w-1/2'>
        <img className='h-screen w-full object-cover' src={registration} alt="registration" /></div>
    </div>
  )
}

export default Login