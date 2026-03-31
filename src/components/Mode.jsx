import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Mode = () => {
    const [mode, setMode] = useState(false)
    const style = {
      backgroundColor: mode? "purple" : "pink",
      color: mode? "white" : "black"
      
    }

  return (
    <div style={style} className='h-screen'>
      {mode?<SignUp/>:<Login/>}
      <div className='flex gap-2 ml-135'>
      <div className='text-xs mt-6'>
      <p>Don't have an Account?</p>
      </div>
      <div>
      <button onClick={() =>setMode(prev => !prev)} className='text-purple-800 pt-5'>Sign Up</button>
      </div>
      </div>


    
    </div>
  )
}

export default Mode
