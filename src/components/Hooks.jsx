import React, { useEffect } from "react";
import { useState } from "react";

const Hooks = () => {
  return (
    <div>
      <UseStateHooks />
      <UseEffect/>
    </div>
  );
};

export default Hooks;

export const UseStateHooks = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className="h-screen flex justify-center items-center p-10 bg-amber-200">
      <div className="bg-amber-400 p-10 rounded-lg text-white">
        <h1 className="text-center">{count}</h1>
        <div className="flex flex=col justify-center items-center mt-10 gap-5">
          <button onClick={handleIncrease} className="bg-green-500 rounded-full py-1 px-5">Increase</button>
          <button onClick={handleDecrease} className="bg-red-500 rounded-full py-1 px-5">decrease</button>
        </div>
      </div>
    </div>
  );
};

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount((prev) => prev + 1);
  }
  useEffect(() => {
    handleIncrease();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center p-10 bg-amber-200 ">
      <div className="bg-purple-400 p-10 rounded-lg text-white">
      <h1 className="ml-10">{count}</h1>
      <div className="flex flex-col mt-5">
      <button onClick={handleIncrease}className="bg-purple-600 rounded-full py-1 px-5">Click Me</button>
    </div>
    </div>
    </div>
  );
};

import {createContext} from "react"
import Profile from "./Profile";

// create context
export const UserContext = createContext()

// parent Component provides data 
function App() {

const [mode, setMode] = usestate(false)

const style = {
  backgroundColor: mode? "black" : "white",
  color: mode? "white" : "black"
}

const handleMode = ()=>{
  setMode(prev => !prev)
}

return(
  <UserContext.Provider value={handleMode, mode, style}>
    <Profile/>
  </UserContext.Provider>)
}