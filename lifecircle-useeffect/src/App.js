// import Reac,{useState} from 'react'
// import ClassComponent from './components/ClassComponent'

// import UseEffectComp from "./components/UseEffectComp"
// import UseEffectComp from "./components/UseEffectComp"
import Users from "./components/Users"
// import UseStateComp from "./components/UseStateComp"

function App() {
  // const [isVisible,setIsVisible] = useState(true);
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2>
      {isVisible && <ClassComponent/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button> */}
      {/* <UseStateComp/> */}
      {/* {isVisible && <UseEffectComp/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button> */}
      <Users/>
    </div>
  )
}

export default App
