import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import { Todoprovider } from "./context/ToDoContext";

function App() {
  return (
    <div className="App">
    <Todoprovider>
      <Input />
      <Button />
      <List />
    </Todoprovider>
    </div>
  );
}

export default App;
