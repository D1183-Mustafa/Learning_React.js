import React from 'react'
import Product from './Product'

function ProductList({products,increasePrice,decreasePrice}) {
  return (
    <div>
      {
          products.map((product,index) => (
            <Product key={product.id} product={product} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
          ))
      }
      
    </div>
  )
}

export default ProductList
