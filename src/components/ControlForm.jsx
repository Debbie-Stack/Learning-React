import React, { useState } from 'react'

const ControlForm = () => {
    const [name, setName] = useState("")

  const handleChange = (event)=>{
        setName(event.target.value)
        console.log(setName(prev=>prev))
    }
  const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`Hello, ${name}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Name' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
      
      
    </div>
  )
}




export const ControlFormManyInput = () => {
    const [formData, setFormData] = useState({username:"", email:""})
    const handleChange = (event) =>{
        const {name, value} = event.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
        console.log(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Hello, ${formData.username} ${formData.email}`)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' name='username' value={formData.username} onChange={handleChange} />
                <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default ControlForm
