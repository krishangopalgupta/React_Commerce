import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./Navbar.css";
import Shop from "../pages/shop/Shop";
const Navbar = () => {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }
  return (
    <>
      <div className="navbar">
        <div className="input">
          <input type="text" onChange={handleChange} value={search} placeholder="Search Items"/>
        </div>
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <Shop search={search} />
    </>
  );
};
export default Navbar;
