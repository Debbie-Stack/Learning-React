import React, { useReducer } from 'react'
import Memo from './Memo'
// USEREDUCER HOOK 
function reducer(state, action) {
    switch (action.type){
        case 'increament':
            return { count: state.count + 1}
            break
        case 'decreament':
            return { count: state.count - 1}
            break  
        case 'reset':
            return { count: state.count === 0}
            break  
        default:
            return state  
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: "increament"})}>Add</button>
        <button onClick={()=> dispatch({type: "decreament"})}>Reduce</button>
        <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
        <Memo/>
      
    </div>
  )
}

export default Reducer
