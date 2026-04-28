import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        navigate("/user/profile")
        alert("Form Submitted")
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input type="text" placeholder='Enter Your Name' />
        <input type="email" placeholder='Enter Your Email'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Form
