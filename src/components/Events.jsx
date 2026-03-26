import React from 'react'
const Events = ({name, age, grade, image}) => {
    function greet(name) {alert(`Hello. ${name}!`)
}
  return (
    <div className='student-card'>
        <div className='student-info'>

      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{grade}</h2>
    </div>
      <img className='student-image' src={image} alt="My Image"/>
      <button onClick={()=> greet("John Adams")}>Greet {name}</button>

    </div>
  )
}

export default Events;
