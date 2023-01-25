import React from "react"
// import"../Components/Navbar.css";
import SearchIcon from "@mui/icons-material/Search"
import "../App.css"
import { Link } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useContext } from "react"
import { ShopContext } from "../Context/State_Context"

function Navbar() {
  const { searchItem, setSearchItem } = useContext(ShopContext)
  console.log(searchItem)
  return (
    <div className="navbar">
      <div className="searchInput">
        <input
          type="text"
          value={searchItem}
          placeholder="Search Product"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <SearchIcon className="icon-search" />
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
