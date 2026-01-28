import React from 'react'
import Mydashboard from './Mydashboard'

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
            
        )
      }

    </div>
  )
}

export default Check
