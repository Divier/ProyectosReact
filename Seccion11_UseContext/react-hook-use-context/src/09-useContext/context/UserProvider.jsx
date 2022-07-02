import { useState } from 'react';
import { UserContext } from './UserContext'

// const user = {
//     id: 1,
//     name: 'Fernando',
//     email: 'fernando@google.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        //<UserContext.Provider value={ {hola: 'mundo', user:user} }>
        <UserContext.Provider value = { {user, setUser} } >
            { children }
        </UserContext.Provider >
  )
}
