import React from 'react'

const Login = () => {
    
  return (
    <div className='flex flex-col justify-center items-center pt-30'>
      <div className='font-bold text-4xl mb-5 text-purple-900'><h1>Hello, Welcome Back</h1></div>
      <div className='pb-10'><p>Hey, Welcome Back to your Page</p></div>
      <div>
      <form>
        <div className='border-2 p-2 rounded-lg w-70 mb-3 border-purple-800'>
        <input type="email" placeholder='debbie202@gmail.com' className='text-xs' />
        </div>
        <div className='border-2 p-2 rounded-lg w-70 mb-2 border-purple-800'>
        <input type="text" placeholder='..........' />
        </div>
      </form>
      </div>
      <div className='flex justify-between gap-30 text-xs mb-10'>
        <p>Remeber Me</p>
        <p>Forgot Password?</p>
      </div>
      <div>
        <button className='mr-45 bg-purple-700 py-3 px-7 font-bold text-white rounded-lg text-xs'>Log in</button>
      </div>
    </div>
  )
}

export default Login
