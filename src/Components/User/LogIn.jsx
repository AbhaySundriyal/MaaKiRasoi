import React from 'react'
import LogInPhoto from '../../assets/LogInPhoto.jpg'
import Logo from '../../assets/Logo.png'

const LogIn = () => {
    return (
        <div className='flex min-h-screen'>
            {/* left side */}
            <div className='w-1/2 min-h-screen pl-4'>
                <div className='flex mt-7 pl-7 w-full'>
                    <img className=' w-[25px] h-[25px]' src={Logo} alt="" />
                    <p className=' font-bold mb-4 ml-2' style={{ color: '#144F97' }}>
                        MAA KI RASOI
                    </p>
                </div>

                <div className='pl-7 mb-8'>
                    <h1 className='text-5xl font-bold ' style={{ color: '#00A9CB' }}>
                        Hello
                        <span className='block mt-3 mb-4'>Welcome Back !!</span>
                    </h1>
                    <p className='text-lg font-bold tracking-wide' style={{ color: '#908888' }}>Hey!! Welcome back to your favourite platform</p>
                </div>
                <div className='pl-7 mb-4'>
                    <input type="email" name="email"  placeholder='Enter your email' className='w-full h-10 px-4 border-2 border-gray-300 rounded-md mb-7' />
                    <input type="password" name="password" placeholder='Enter your password' className='w-full h-10 px-4 border-2 border-gray-300 rounded-md ' />
                </div>
                <div className='pl-7 flex items-center justify-between'>
                    <label htmlFor="">
                    <input type="checkbox" name="" id="" className='mr-2' />
                    <span className='' style={{color:'#919191'}}>Remember me</span>
                </label>
                <a href="#" style={{color:'#919191'}} className='underline'>Forgot password??</a>
                </div>
                <div className='pl-7 mt-6 mb-6 justify-center'>
                    <button className='w-35 h-10 rounded-md font-semibold text-xl text-white' style={{backgroundColor:'#00A9CB'}}>Log In</button>
                </div>
                <div className='flex justify-items-center pl-7'>
                    <p className='font-semibold mr-1' style={{color:'#919191'}}>Don't have an account?? </p>
                    <p className='font-semibold underline' style={{color:'#00A9CB'}}> Sign Up</p>
                </div>
            </div>
            {/* Righr div */}
            <div className=' flex w-1/2 h-screen'>
                <img className='w-[80%] h-[75%] object-contain mx-auto my-auto ' src={LogInPhoto} alt="LogIn" />
            </div>
        </div>
    )
}

export default LogIn
