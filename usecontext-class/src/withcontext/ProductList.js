import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from './ProductContext';



function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {
          products.map((product,index) => (
            <Product key={product.id} product={product}/>
          ))
      }

    </div>
  )
}

export default ProductList
