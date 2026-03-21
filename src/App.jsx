import Welcome from "./components/Welcome";
import user1 from "./assets/carolynbeekhuis-portrait-photo-3001326.jpg"
import user2 from "./assets/meandyou2-headshot-2644201_640.jpg"
import user3 from "./assets/7000920-baby-2953791_640.jpg"
import user4 from "./assets/gart-self-portrait-687589.jpg"
import user5 from "./assets/meandyou2-headshot-2644201_640.jpg"

const App = () => {

  return (
    <div> 
      <Welcome name = "John" age="21" grade="Excellent (A)" image={user1}/>
      <Welcome name = "Mike" age="26" grade="Good (C)" image={user2}/>
      <Welcome name = "Faith" age="28" grade="Pass (D)" image={user3}/>
      <Welcome name = "Joy" age="25" grade="Fair (E)" image={user4}/>
      <Welcome name = "Peter" age="32" grade="Failed (F)" image={user5}/>
    </div>
  )
}

export default App;