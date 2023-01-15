import React from 'react';
// import"../Components/Navbar.css";
import "../App.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart"><ShoppingCartIcon/></Link>
      </div>
    </div>
  )
}

export default Navbar