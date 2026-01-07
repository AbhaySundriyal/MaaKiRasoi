import React from 'react'
import SignUpPhoto from '../../assets/SignUpPhoto.jpg'
import Logo from '../../assets/Logo.png'

const SignUp = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2'>
                <img src={SignUpPhoto} alt="" className='object-contain w-[85%] h-[75%] ml-15 mt-12' />
            </div>
            <div className='w-1/2'>
                <div className='flex mt-5'>
                    <img src={Logo} className='w-[25px] h-[25px]' alt="" />
                    <p className='ml-2 font-semibold mb-3'>MAA KI RASOI</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold mb-3 text-[#00A9CB]'>Sign Up !!</h1>
                    <p className='font-semibold mb-4 text-[#908888]'>Start you wonderful journey of food and joy !!</p>
                </div>
                <div>
                    <p className='mb-1/2 text-[#3C3C3C] font-semibold'>Name*</p>
                    <input type="text" className='border-2 rounded w-130 h-10 pl-2 border-[#b7b5b5]  mb-2 placeholder:text-gray-300' required/>
                </div>
                <div>
                    <p className='font-semibold mb-1/2 text-[#3C3C3C]'>Email*</p>
                    <input type="email" className='border-2 rounded w-130 h-10 pl-2 border-[#b7b5b5]  mb-2 placeholder:text-gray-300' required/>
                </div>
                <div>
                    <p className='mb-1/2 text-[#3C3C3C] font-semibold'>Phone Number*</p>
                    <input type="number"  className='border-2 rounded w-130 h-10 pl-2 border-[#b7b5b5] mb-2 placeholder:text-gray-300' required/>
                </div>
                <div>
                    <p className='mb-1/2 text-[#3C3C3C] font-semibold'>Password*</p>
                    <input type="password"  className='border-2 rounded w-130 h-10 pl-2 border-[#b7b5b5] mb-6 placeholder:text-gray-300' required/>
                </div>
                <div className='flex ml-35'>
                    <button className='h-9 w-50 text-white bg-[#00A9CB] font-semibold text-xl rounded mb-4 '>Create Account</button>
                </div>
                <div className=''>
                    <p className='ml-30 font-semibold text-gray-400'>Already have an Account ?? <span>
                        <a href="#" className='text-[#00A9CB] font-bold' >Log In</a>
                        </span>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
