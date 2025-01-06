import React from 'react'

const Login = () => {
  return (
    <div className='LoginPage login-flex '>
        <h2 className=' font-semibold text-[#fff]'>Already a Member?</h2>
        <h3 className='text-[#fff] mt-[2em] pb-[1em]'>Login</h3>


        <form className='loginform'>
            <label htmlFor='email'>Email Address:</label><br/>
              <input
                type="email"
                name="email"
             
                required
              /><br/>
            <label>Password:</label><br/>
              <input
                type="password"
                name="collegeName"
                
                required
              />
            <div className='flex mt-[20px] gap-[1em] justify-end'>
                <button type="submit" className='bg-white text-primary py-[0.3em] px-[1em] text-[18px] md:text-[20px] lg:text-[22px] border-[2px] border-[#fff]'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
