import { useState } from "react"

export default function OnChangeEvent(){
    

        const [name, setName] = useState("")
        
        const handleChange=(event)=>{
            setName(event.target.value)
        } 
        const handleSubmit = (event)=>{
            event.preventDefault()
            setName("")
            alert("Submitted")
            console.log(name)
        }
        return (
            <div className="">
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
            </form>
            <div>{name}</div>
        </div>
    )
}


