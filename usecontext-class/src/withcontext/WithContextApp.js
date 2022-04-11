import React from "react";
import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";

function WithContextApp() {
  return (
    <div>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default WithContextApp;
