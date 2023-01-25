import React from "react"
// import { PRODUCTS } from "../../Products"
import { useContext } from "react"
import { ShopContext } from "../../Context/State_Context"
import Product from "./Product"
// import "../Shop/Shop.css";
import "../../App.css"
import Pagination from "./Pagination"

function Shop() {
  const { currentPost, searchItem } = useContext(ShopContext)
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Shop</h1>
      </div>
      <div className="products">
        {currentPost
          .filter((item) => {
            return searchItem.toLowerCase() === ""
              ? item
              : item.productName.toLowerCase().includes(searchItem)
          })
          .map((product, id) => (
            <Product data={product} key={id} />
          ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  )
}

export default Shop
