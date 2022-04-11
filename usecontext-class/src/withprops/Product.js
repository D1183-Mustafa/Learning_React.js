import React from 'react'

function Product({product,increasePrice,decreasePrice}) {
  return (
    <div>
      <h1>product</h1>
      <p>{product.product}</p>
      <p>{product.price}</p>
      <button id={product.id} onClick={increasePrice}>increase</button>
      <button id={product.id} onClick={decreasePrice}>decrease</button>
    </div>
  )
}

export default Product
