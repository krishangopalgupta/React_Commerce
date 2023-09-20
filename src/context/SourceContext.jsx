import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {

  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
    console.log(PRODUCTS.length)
  }
  return cart;
};


const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  function addCartItem(itemId) {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeCartItem(itemId) {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  // console.log(cartItem)

  const updateCartItemCount = (newAmount, id) => {
    setCartItem((prev) => ({ ...prev, id:newAmount }));
  }

  const getTotalCartAmout = () =>{
    let totalAmount=0;
    for(let item in cartItem){
      if(cartItem[item] > 0 ){
        let itemInfo = PRODUCTS.find(product => product.id === Number(item));
          totalAmount+= cartItem[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  const contextValue = { cartItem, addCartItem, removeCartItem, updateCartItemCount, getTotalCartAmout};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
