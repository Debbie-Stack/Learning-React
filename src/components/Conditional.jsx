import React, { useState } from 'react'

const Conditional = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)



    
   return(
    <div>
        {isLoggedIn ? 
        <div className='flex justify-center items-center pt-70 font-bold text-xl animate-bounce'>
        <h1>Welcome User</h1>
        </div>
        : 
        <div className='flex flex-col justify-center items-center p-50'>
        <form action="submit">
            <div>
                <h1 className='font-bold text-xl'>LOG IN</h1>
            </div>
            <div className='border-2 my-3 p-2 border-purple-700 rounded-lg'>
            <input type="text" placeholder='User Name' />
            </div>
            <div className='border-2 w-60 my-3 p-2 border-purple-700 rounded-lg'>
            <input type="text" placeholder='User Password'/>
            </div>
            <div className='rounded-lg border-2 ml-40 p-2 border-purple-700'>
            <button onClick={()=>setIsLoggedIn(true)}>Log-In</button>
            </div>
        </form>
        </div>}


    </div>
   )   


}

export default Conditional
