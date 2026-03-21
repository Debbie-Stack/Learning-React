
const Welcome = ({name, age, grade, image

}) => {
  return (
    <div className="flex justify-center gap-10 ">
      <div>
      <img src={image} alt="user image" className="w-30 h-30 rounded-full" />
      </div>

      <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Grade: {grade}</h1>
      </div>
    </div>

    
  )
}

export default Welcome
