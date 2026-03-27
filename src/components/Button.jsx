
import React, { useState } from 'react'

const Button = () => {
    const [isClicked, setIsClicked] = useState(false)
  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <button onClick={()=>setIsClicked(prev => !prev
    )} className='border-2 p-2'>{isClicked? "loading": "click me"}</button>
   </div>
  )
}

export default Button
