import { createContext, useState } from "react";

const ToDoContext = createContext();

export const Todoprovider = ({ children }) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState({ number: "1", data: "" });
  console.log(number.number);
  const handleChange = (e) => {
    setInput(e.target.value);
    setNumber({ ...number, [e.target.name]: e.target.value });
  };
  console.log(list);

  const handleClick = (e) => {
    if (input !== "") {
      setList([...list, { number: String(number.number), data: number.data }]);

      setInput("");
      Number(number.number++)
    }

    console.log(number.number);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //   const filtered = list.filter((item) => {
  //       return(
  //           item.includes(search)
  //       )
  //   })
  //   const filtered = list.filter((item) => {
  //     return(
  //         Object.keys(item).some((key) => {
  //             return(
  //                 item[key].includes(search)
  //             )
  //         })
  //     )
  // })
  const filtered = list.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].includes(search);
    });
  });
  console.log(filtered);

  return (
    <ToDoContext.Provider
      value={{ list, input, handleClick, handleChange, handleSearch, filtered }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
