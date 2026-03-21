
const Welcome = ({name, age, gender, grade, image

}) => {
  return (
    <div className="flex justify-center items-center gap-10 mb-6">
      <div className="border-2 rounded-full border-violet-500">
      <img src={image} alt="user image" className="w-30 h-30 rounded-full" />
      </div>

      <div className="text-white font-bold text-lg">
      <h1 className="border-t-3 border-b-3 p-1 border-dashed">Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>Gender : {gender}</h1>
      <h1>Grade : {grade}</h1>
      </div>
    </div>

    
  )
}

export default Welcome
