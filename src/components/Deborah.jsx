import React, { useState } from "react";
import puppy from "../assets/neelansh-jain-bSPO68TzM3c-unsplash.jpg";
import { FaRegHeart } from "react-icons/fa6"
import { IoMdHeart } from "react-icons/io"

const Deborah = () => {
  const [like, setLike] = useState(0);

  function handleIncrease() {
    setLike(like + 1);
  }
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-amber-500/40">
      <div className="rounded-2xl overflow-hidden w-80 h-100">
        <div onClick={handleIncrease}>
          <img src={puppy} />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-10">
            <UseHooks setLike={setLike} />
            <button onClick={handleIncrease} className={`${like > 0 && "text-red-600"} flex items-center gap-1 cursor-pointer`}>Like {like <= 0 ? <FaRegHeart/>: <IoMdHeart/> }</button>
          </div>
          <div>
            <button>Comment</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Deborah;

const UseHooks = ({setLike}) => {
  function handleDecrease() {
    setLike((prev) => prev - 1);
  }
  return (
    <div>
      <button onClick={handleDecrease}>Dislike</button>
    </div>
  );
};
