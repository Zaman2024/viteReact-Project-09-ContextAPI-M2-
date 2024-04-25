import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import ContextProvider from './Context/ContextProvider'
// import UserContext from './Context/ContextProvider'

function App() {
  const [counter, setCounter] = useState(0)
   
  return (
    <ContextProvider>
      <Login />
      <Profile />
  </ContextProvider>
  )
}

export default App
