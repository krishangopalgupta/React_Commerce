import React, { useContext } from "react";
import { ShopContext } from "../../context/SourceContext";

const CartItemElement = ({ product }) => {
  const { cartItem, addCartItem, removeCartItem, updateCartItemCount } =
    useContext(ShopContext);
  console.log(cartItem);
  const { id, price, productImage, productName } = product;
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
          <p>${price}</p>
        </p>

        <div className="countHandler">
          <button onClick={() => removeCartItem(id)}>-</button>
          <input value={cartItem[id]} />
          <button
            onClick={() => addCartItem(id)}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemElement;
