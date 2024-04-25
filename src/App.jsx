import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import ContextProvider from './Context/ContextProvider'
import UserContext from './Context/ContextProvider'

function App() {
  const [user, setUser] = useState('')
   
  useEffect(()=>{
    setUser = useContext(ContextProvider)
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Login />
      <Profile />
  </UserContext.Provider>
  )
}

export default App
