import { useContext } from "react";
import { ShopContext } from "../../Context/State_Context";
import  ClearIcon  from "@mui/icons-material/Clear"
// import "./Cart.css";
import "../../App.css";

function Product(props) {
  const { id, productName, price, productImage } = props.data
  const { addToCart, cartItem, removeCartItem } = useContext(ShopContext)
  const CartItemAmount = cartItem[id]
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <b>${price}</b>
      </div>
      <button className="removebtn" onClick={() => removeCartItem(id)}>
        <ClearIcon />
      </button>
    </div>
  )
}

export default Product
