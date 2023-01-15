import React from "react"
import { PRODUCTS } from "../../Products"
import Product from "./Product";
// import "../Shop/Shop.css";
import "../../App.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product,id) => (
          <Product data={product} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Shop
