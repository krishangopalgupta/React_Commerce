import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../../context/SourceContext";

import { PRODUCTS } from "../../product";
import CartItemElement from "./CartItemElement";
import "./Cart.css";

const Cart = () => {
  const { cartItem, getTotalCartAmout } = useContext(ShopContext);
  let totalAmount = getTotalCartAmout();
  // console.log(totalAmount);
  const Navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product, id) => {
          if (cartItem[product.id] !== 0) {
            return <CartItemElement product={product} key={id} />;
          }
        })}
      </div>

      {/* check cart item is empty or not */}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      <div className="checkout">
        <button onClick={() => Navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;

// {...{ product }}
