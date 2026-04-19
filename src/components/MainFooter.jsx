import React from 'react'

const MainFooter = () => {
  return (
    <div>
        <footer className='flex justify-between items-center w-300 mx-auto p-5'>
      <div className='font-bold font-serif text-lg'>
        <p>Inspired by <span className='text-blue-800'>Me</span> Done by <span className='text-blue-800'>Me</span></p>
      </div>
      <div className='flex gap-3 font-serif'>
        <div>
        <h1>Check me out on : <span className='text-red-700'>Instagram,</span> <span className='text-yellow-400'>Tiktok,</span> <span className='text-purple-500'>Facebook.</span></h1>
        </div>
        </div>
        </footer>
      </div>
  )
}

export default MainFooter
