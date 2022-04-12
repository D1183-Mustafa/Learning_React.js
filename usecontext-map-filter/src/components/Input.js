import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext";


function Input() {
    const {handleChange,input,handleSearch} = useContext(ToDoContext);
    console.log(input);
  return (
    <div>
      <input type="text" onChange={handleChange} value={input} placeholder="Lütfen Ekleme yap" name="data"/>
      <input type="text" placeholder="Arama" onChange={handleSearch}/>
    </div>
  );
}

export default Input;
