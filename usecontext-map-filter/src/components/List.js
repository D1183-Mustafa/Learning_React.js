import React, { useContext } from 'react';
import ToDoContext from '../context/ToDoContext';


function List() {
    const {filtered} = useContext(ToDoContext);
    console.log(filtered);
  return (
    <div>
      {
          filtered.map((item) => {
              return(
                  <p key={Number(item.number)}>{item.number}-{item.data}</p>
              )
          })
      }
    </div>
  )
}

export default List
