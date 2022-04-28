import React from 'react'
import { useSelector } from 'react-redux'

function AppCounter() {
    const {counter} = useSelector((state) => state.counterReducer);
    console.log(counter);
  return (
    <div style={counter < 0 ? {color:"red",fontWeight : "900"} : counter > 0 ? {color:"green",fontWeight : "900"} : {color:"black", fontWeight : "900"}}>
      {counter}
    </div>
  )
}

export default AppCounter
