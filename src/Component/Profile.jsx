import React, { useContext } from 'react'
// import UserContext from '../Context/ContextProvider'
import ContextProvider from '../Context/ContextProvider'

function Profile() {
  const {User} =useContext(ContextProvider)
  if(!User) return <div>Please Login</div>
  return <div>Welcome {User.username}</div>
}

export default Profile
