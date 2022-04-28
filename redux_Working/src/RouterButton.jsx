import React from 'react'
import { useNavigate } from 'react-router-dom'

function RouterButton() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/counter")}>Counter page</button>
      <button onClick={() => navigate("/todoapp")}>To Do App page</button>
      {/* <button onClick={navigate("/countercomponentt")}>To DO List page</button> */}
    </div>
  )
}

export default RouterButton
