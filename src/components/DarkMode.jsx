import React, { useState } from 'react'

const DarkMode = () => {
    const [isMode, setIsMode] = useState(false)

    const style = {
        backgroundColor: isMode? "white" : "black",
        color: isMode? "black" : "white"
    }
  return (
    <div style={style} className='flex justify-center items-center w-full h-screen'>
        <button className='border-2 p-2' onClick={()=>setIsMode(prev => !prev)}>Click Me</button>
      

    </div>
  )
}

export default DarkMode
