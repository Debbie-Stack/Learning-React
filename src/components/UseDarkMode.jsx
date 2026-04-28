
import { useState } from 'react'

const UseDarkMode = () => {
    const [mode, setMode] = useState(false)
    const style= {
        backgroundColor: mode? "black" : "white",
        color: mode? "white" :"black"
    }
  return (
    <div style={style} className='flex justify-center items-center h-screen'>
      <button onClick={()=>setMode(prev => !prev)}>Change BG</button>
    </div>
  )
}

export default UseDarkMode
