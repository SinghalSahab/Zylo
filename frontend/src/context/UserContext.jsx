import React, { createContext } from 'react'

export userDataContext = createContext();
const UserContext = ({children}) => {
  return (
    <div>
        <userDataContext.Providor></userDataContext.Providor>
    </div>
  )
}

export default UserContext