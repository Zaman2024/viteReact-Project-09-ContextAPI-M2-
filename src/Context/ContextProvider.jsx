
import React, { useState } from 'react'

const UserContext= React.createContext();


export default function ContextProvider({children}) {
  const [user, setUser] = useState(null)
  

  return (

    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>

  )
}
