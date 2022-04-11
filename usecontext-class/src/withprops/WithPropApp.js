import React, { useState } from 'react'
import ProductList from './ProductList'
const initialProducts = [
    {id: 0,product: "Basketball", price: 12.99},
    {id: 1,product: "Baseball", price: 9.99},
    {id:2,product: "Tennis Racquet", price: 89.99},
]
function WithPropApp() {
    const [products, setProducts] = useState(initialProducts);
    const increasePrice = (e) => {
        const newProducts = [...products];
        newProducts[e.target.id].price = newProducts[e.target.id].price + 1
        setProducts(newProducts)
    }
    const decreasePrice = (e) => {
        const newProducts = [...products];
        newProducts[e.target.id].price = newProducts[e.target.id].price - 1;
        setProducts(newProducts)
    }
  return (
    <div>
      props
      <ProductList products={products} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
    </div>
  )
}

export default WithPropApp
