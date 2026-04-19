import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav>
        <div className='flex justify-between items-center w-300 mx-auto p-3 h-15'>
        <div>
        <h1 className='font-bold text-2xl font-serif'>Routes</h1>
        </div>
        <div>
            <ul className='font-serif flex gap-15'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/resume"}>Resume</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
        <div>
            <button className='font-bold font-serif'>Menu</button>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
