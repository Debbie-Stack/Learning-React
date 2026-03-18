import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills"
import Call from "./Call"
import Footer from "./Footer";

const HomePage = ()=>{
  return (
    <div>
      <NavBar />
      <h1 className="flex justify-center mt-20 font-bold text-[90px] text-purple-500">Hello World</h1>
      <About/>
      <Skills/>
      <Call/>
      <Footer />
    </div>
  )
}

export default HomePage;
