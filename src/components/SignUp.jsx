import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col pt-30 justify-center items-center'>
      <div className='text-4xl font-bold font-serif pb-5'><h1>Hi, Care to SignUp?</h1></div>
      <div className='font-bold font-serif mb-5'><p>Let's Goooo</p></div>
      <div>
        <form action="">
          <div className='border-2 rounded-lg w-70 p-2 mb-3 text-xs'>
            <input type="text" placeholder='Your Name' />
          </div>
          <div className='border-2 rounded-lg w-70 p-2 mb-3 ml-10 text-xs'>
            <input type="email" placeholder='Your Email' />
          </div>
          <div className='border-2 rounded-lg w-70 p-2 mb-3 text-xs'>
            <input type="text" placeholder='+2349165241862' />
          </div>
          <div className='border-2 rounded-lg w-70 p-2 mb-5  ml-10 text-xs'>
            <input type="text" placeholder='Set Password' />
          </div>
        </form>
      </div>
      <div className='mr-52 bg-purple-700 py-3 px-7 font-bold text-white rounded-lg text-xs border-2 border-gray-400'><button>Sign In</button></div>
    </div>
  )
}

export default SignUp
