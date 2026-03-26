import { useState } from "react"

const Practice = ()=>{
    const [status, setStatus] = useState("")

    const handleChange=(event)=>{
        setStatus(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        setStatus("")
        alert("Status Uploaded")
    }
  return (
    <div className="w-300 mx-auto flex justify-between items-center h-15">
        <div>
            <h1 className="font-bold text-xl font-[Bold-Sans]">GitLab</h1>
        </div>
        <div>
            <ul className="flex gap-20 font-[Bold-Sans]">
                <li>Home</li>
                <li>Info</li>
                <li>About</li>
                <li>Web</li>
                <li>Visit</li>
            </ul>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" className="border-2 rounded-lg font-[Bold-Sans]" placeholder="search web" value={status} onChange={handleChange} />
            <button className="border-2 p-1 rounded-lg ml-10 font-[Bold-Sans]" type="submit">Search</button>
        </form>
    </div>
  )
}
export default Practice

