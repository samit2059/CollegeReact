import React from 'react'
import Mydashboard from './Mydashboard'
import Login from './Login'

const Check = ({isLoggedIn}) => {
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
}

export default Check
