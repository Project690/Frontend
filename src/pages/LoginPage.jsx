import React from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
const LoginPage = () => {
  return (
    <div>
      <div className=' top-0 left-0 right-0 py-[15px] md:py-[20px] px-[7%] sm:px-[5%]'>
        <p className='uppercase font-chakra text-[32px] font-bold text-primary'>logo</p>
    </div>
    <div className='absolute inset-0 md:flex w-full min-h-screen'>
      
        <div className='md:w-1/2'>
        <Signup/>
        </div>
        <div className='md:w-1/2'>
          <Login/>
        </div>

      
    </div>
    </div>
  )
}

export default LoginPage
