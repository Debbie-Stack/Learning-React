import React, { useContext } from 'react'
import Nav from "../Nav"
import HeroSection from '../home-component/HeroSection'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../Context'

const Home = () => {
  const {style} = useContext(UserContext)
  return (
    <div style={style} h-screen>
      <Outlet/>
       <Nav />
      {/* <HeroSection/> */}
      {/* <MainFooter /> */}
    </div>
  )
}

export default Home
