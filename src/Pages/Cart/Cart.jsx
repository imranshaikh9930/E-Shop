import React from "react"
import { PRODUCTS } from "../../Products"
import { useContext } from "react"
import { ShopContext } from "../../Context/State_Context";
import CartItem from "../Cart/Cart-Item";
import { useNavigate } from "react-router-dom";



function Cart() {
  const { cartItem,getTotalCartAmount  } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div >
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product,id) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem key={id} data={product} />
          
          }
        })}
      </div>
      {
        totalAmount > 0 ? <div className="checkout">
          <p>SubTotal :${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
          : <h3>Your Cart Empty</h3>}
    </div>
          
      
      
  )
}

export default Cart;
