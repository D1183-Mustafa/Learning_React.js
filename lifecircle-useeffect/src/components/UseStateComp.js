import React, {useState} from 'react'

const UseStateComp = () => {
  //! Don’t call Hooks inside loops, conditions, or nested functions.
  //! Don’t call Hooks from regular JavaScript functions.
  //* Only call Hooks at the top level
  //* Call Hooks from React function components.
  //* Call Hooks from custom Hooks.

  const [count,setCount] = useState(0);
  const [age,setAge] = useState(0);

  const increase = (e) => {
    setCount(count+1)
  }

  const increaseAge = () =>{
    setAge((age) =>age + 1)
  }
  return (
    <div className="function">
      <h2>{count}</h2>
      <button onClick={increase}>increase count</button>
      <p>Age :{age} </p>
      <button onClick={increaseAge}>increase age</button>
    </div>
  )
}

export default UseStateComp
