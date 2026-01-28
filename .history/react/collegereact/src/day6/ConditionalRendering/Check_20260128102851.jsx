import React from 'react'
import Mydashboard from './Mydashboard'

const Check = ({isLoggedIn}) => {
  return (
    <div>
      if(isLoggedIn){
        return (
            <Mydashboard />
        )
      }

    </div>
  )
}

export default Check
