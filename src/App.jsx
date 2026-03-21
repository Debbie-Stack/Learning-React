import Welcome from "./components/Welcome";
import user1 from "./assets/carolynbeekhuis-portrait-photo-3001326.jpg"
import user2 from "./assets/meandyou2-headshot-2644201_640.jpg"
import user3 from "./assets/7000920-baby-2953791_640.jpg"
import user4 from "./assets/gart-self-portrait-687589.jpg"

const App = () => {

  return (
    <div className="bg-indigo-300 h-[105vh]">
      <h1 className="ml-130 font-bold text-xl mb-7 text-white border-b-5">Exams Report for Grade 1 Pupils</h1> 
      <Welcome name = "John Adams" age="6" gender="Male" grade="Excellent (A)" image={user1}/>
      <Welcome name = "Mike Jordan" age="7" gender="Male" grade="Good (C)" image={user2}/>
      <Welcome name = "Faith Ado" age="6" gender="Female" grade="Pass (D)" image={user3}/>
      <Welcome name = "Joy Yaxs" age="7" gender="Female" grade="Fair (E)" image={user4}/>
    </div>
  )
}

export default App;