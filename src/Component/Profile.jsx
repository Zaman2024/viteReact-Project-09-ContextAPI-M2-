import React, { useContext } from 'react'
// import UserContext from '../Context/ContextProvider'
import ContextProvider from '../Context/ContextProvider'

function Profile() {
  const {user} = useContext(ContextProvider)

  if(!user) return <div>Please Login</div>
  return <div>Welcome {user.username}</div>
}

export default Profile
