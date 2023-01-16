import React from 'react';
// import"../Components/Navbar.css";
import SearchIcon from "@mui/icons-material/Search"
import "../App.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


function Navbar() {
  return (
    <div className="navbar">
      <div className="searchInput">
        <input type="text" placeholder='Search Product' />
        <SearchIcon className='icon-search'/>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  )
}

export default Navbar