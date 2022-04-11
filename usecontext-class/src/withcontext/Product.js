import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
function Product({ product }) {
  const {increasePrice,decreasePrice} = useContext(ProductContext);
  return (
    <div>
      <h1>product</h1>
      <p>{product.product}</p>
      <p>{product.price}</p>
      <button onClick={() => increasePrice(product.id)}>increase</button>
      <button onClick={() => decreasePrice(product.id)}>decrease</button>
    </div>
  );
}

export default Product;
