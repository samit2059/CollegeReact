import React from 'react'
import Mydashboard from './Mydashboard'
import Login from './Login'

const Check = ({isLoggedIn}) => {
  return (
    <div>
      if(isLoggedIn){
        return(
            <Mydashboard />
        )
      }
      else{
        return(
            <Login />
        )
      }

    </div>
  )
}

export default Check
