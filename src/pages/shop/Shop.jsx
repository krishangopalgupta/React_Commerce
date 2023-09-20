import React from "react";
import { PRODUCTS } from "../../product";

import Product from "./Product";
import "./Shop.css";

const Shop = ({search}) => {

    const filteredData = PRODUCTS.filter((product) => {
    if (search === "") return product;
    else {
      return product.productName.toLowerCase().includes(search);
    }
  });

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Krishan.</h1>
      </div>

      <div className="products">
        {filteredData.map((product,id) => (
          <Product {...product} key={id}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;