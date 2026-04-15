// import Welcome from "./components/Welcome";
// import user1 from "./assets/carolynbeekhuis-portrait-photo-3001326.jpg";
// import user2 from "./assets/meandyou2-headshot-2644201_640.jpg";
// import user3 from "./assets/7000920-baby-2953791_640.jpg";
// import user4 from "./assets/gart-self-portrait-687589.jpg";
// import Events from "./components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import ClassWork from "./components/ClassWork";
import Conditional from "./components/Conditional";
import ConditionPractice from "./components/ConditionPractice";
import Condition from "./components/ConditionPractice";
import ControlForm, { ControlFormManyInput } from "./components/ControlForm";
import DarkMode from "./components/DarkMode";
import OnChangeEvent from "./components/Event";
import Letter from "./components/Letter";
import List from "./components/List";
import Mode from "./components/Mode";
import Practice from "./components/Practice";
import Read from "./components/Read";
import UnControlForm from "./components/UnControlForm";
import Error from "./components/Error";
import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";
import ResumePage from "./components/pages/ResumePage";
import ContactPage from "./components/pages/ContactPage";



const App = () => {

  return (
    <div>
        {/* <OnChangeEvent/> */}
        {/* <Letter/>/ */}
        {/* <ClassWork/> */}
        {/* <Practice/> */}
        {/* <Conditional/> */}
        {/* <Button/> */}
        {/* <DarkMode/> */}
        {/* <ConditionPractice/> */}
        {/* <Mode/> */}
        {/* <Read/> */}
        {/* <List/> */}
        {/* <ControlForm/> */}
        {/* <ControlFormManyInput/> */}
        {/* <UnControlForm/> */}

        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="resume" element={<ResumePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  );
};

export default App;