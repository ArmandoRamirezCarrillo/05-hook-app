import { useState } from 'react'
import { userContext } from './UserContext'

// const user = {
//     id: 1,
//     name: 'Armando',
//     email: 'ing.armandoramirez@outlook.com'
// }

export const UserProvider = ({children}) => {
  
    const [user, setUser] = useState();
  
    return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}
