
import './App.css';
import Header from './components/header/Header';
import Product from "./components/product/Product"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from "react";

function App() {
  const [product,setProduct] = useState([]);
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then((result) => {
      // console.log(result);
      setProduct(result.data)
    }).catch((err) => {
      console.log(err)
    });
  },[]);
  // console.log(product)

  return (
    <Router className="App">
      <Header/>
      <Routes>
        <Route path="/Products" element={<Product product={product}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
