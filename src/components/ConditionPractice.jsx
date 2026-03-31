import React, { useState } from 'react'


const ConditionPractice = () => {
    const [isCondition,setIsCondition] = useState(false)

    const style = {
      backgroundColor: isCondition? "purple" : "black",
      color: isCondition? "white" : "purple"

    }
     

  return (
    <div style={style} className='flex justify-center items-center h-screen'>
      <button onClick={()=>setIsCondition(prev => !prev)} className="border-2 p-2">
        {isCondition? "Processing...": "Click"}

      </button>
      
    </div>
  )
}

export default ConditionPractice
