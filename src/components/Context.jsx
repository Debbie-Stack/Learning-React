import { createContext, useState } from "react";

export const UserContext = createContext(null)

// wrap -> this allows u to pass in the value of the context in all your components
const UserProvider = ({children}) => {
    const [mode, setMode] = useState(false)
    const [user, setUser] = useState({
        name: "debbie",
        role: "student"
    })

    const style = {
        backgroundColor: mode? 'black' : 'white',
        color: mode? 'white' : 'black'
    }

    return (
        <UserContext.Provider value={{user, setUser, style, setMode}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider