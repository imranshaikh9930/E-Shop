import React from 'react';
import "../Shop/Shop.css";
import { useContext } from "react";
import { ShopContext } from '../../Context/State_Context';


function Product(props) {

    const {id,productName,price,productImage} = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const CartItemAmount = cartItem[id];
  return (
    <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <b>${price}</b>
        </div>
      <div className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {CartItemAmount > 0 && <>({CartItemAmount})</>}</div>
    </div>
  )
}

export default Product