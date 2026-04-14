import React, { useRef } from 'react'

const UnControlForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = nameRef.current.value
        const email = emailRef.current.value
    
       alert(`Name: ${name} Email: ${email}`)
       console.log(name, email)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder='Enter your name' />
        <input type="text" ref={emailRef} placeholder='Enter your email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UnControlForm
