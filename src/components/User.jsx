import React, { useContext } from 'react'
import  { Link, Outlet } from 'react-router-dom'
import { UserContext } from './Context'

const User = () => {
  const {user, setUser, style, setMode} = UserContext(UserContext)
  return (
    <div style={style}>
      <Link to={'/'}>Home</Link>
      <button onClick={()=> setMode(prev => !prev)}>Mode</button>
      <h1>Name: {user.name}</h1>
      <h1>Role: {user.role}</h1>
      <Outlet/>
    </div>
  )
}

export default User