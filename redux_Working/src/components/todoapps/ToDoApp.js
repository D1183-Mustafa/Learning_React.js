import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { ekle ,sil} from "../../todoredux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function ToDoApp() {
  const [text, setText] = useState();
  const { list } = useSelector((state) => state.ToDoReducer);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(ekle(text));
  };


  console.log(list);
  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Ekle</button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {list.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                maxWidth: "30vw",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={item.id}
            >
              <p>{item.text}</p>
              <CancelIcon onClick={() => dispatch(sil(item.id))}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoApp;
