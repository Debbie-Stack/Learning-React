import React, { useContext } from 'react'
import { UserContext } from '../Context'


const ContactPage = () => {
  const {style, user} = useContext(UserContext)
  return (
    <div style={style} className='flex justify-center items-center font-bold text-3xl my-55 w-300 mx-auto'>
      <h1>Hello, Care to Reach-Out ?</h1>
    </div>
  )
}

export default ContactPage
