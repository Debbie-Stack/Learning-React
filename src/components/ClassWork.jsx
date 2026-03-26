import { useState } from 'react'


const ClassWork = () => {
    const [age, setAge] = useState("")

    const handleChange=(event)=>{
        setAge(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        setAge("")
        alert("submitted")
        console.log(age)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <div>{age}</div>
    </div>
  )
}

export default ClassWork
