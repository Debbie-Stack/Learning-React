import { useContext } from "react"
import { UserContext } from "./Context"

const Welcome = ({name, age, image}) =>{
  const {user, setUser, style, setmode} = useContext(UserContext)
  return (
    <div style={style}>
      <h1>Hello {user.name}</h1>
      <p>Role {user.role}</p>
      <h1>age {age}</h1>
      <img src={image} alt="user-image" />
      <button onClick={()=>setUser({...user, role:"CEO"})}>Click me</button>
      <button onClick={()=>setMode(prev => !prev)}>Mode</button>
    </div>
  )
}
export default Welcome