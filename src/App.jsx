import { useState } from 'react'

import './App.css'
import { ContextProvider } from './Context/ContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [counter, setCounter] = useState(0)
   
  return (
    <ContextProvider>
      <Login/>
      <Profile />
  </ContextProvider>
  )
}

export default App
