import React, { useContext } from "react";

import { ShopContext } from "../../context/SourceContext";
function Product({ id, productName, price, productImage }) {
  const { addCartItem, cartItem } = useContext(ShopContext);

  const cartItemAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => addCartItem(id)}>
        Add to Cart {cartItemAmount > 0 && <b>({cartItemAmount})</b>}
      </button>

      {/* <input type="text" /> */}
    </div>
  );
}

export default Product;
