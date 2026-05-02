import React, { useMemo } from 'react'

const Memo = ({num = 0}) => {
    const result = useMemo(()=>{
        console.log("calculating...")
        return num * 2
    }, [num])
  return (
    <div>
      {result}
    </div>
  )
}

export default Memo
