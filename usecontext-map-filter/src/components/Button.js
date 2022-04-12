import React, { useContext } from 'react'
import ToDoContext from "../context/ToDoContext";

function Button() {
    const {handleClick} = useContext(ToDoContext);
  return (
    <div>
      <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Button
