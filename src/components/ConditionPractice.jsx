import React, { useState } from 'react'

const ConditionPractice = () => {
    const [isCondition,setIsCondition] = useState(false)
     

  return (
    <div className='flex justify-center items-center pt-70'>
      <button onClick={()=>setIsCondition(prev => !prev)} className="border-2 p-2">
        {isCondition? "Processing...": "Click"}

      </button>
      
    </div>
  )
}

export default ConditionPractice
