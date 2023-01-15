import { createContext ,useState} from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;


    } 
    return cart;
}


export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart);
    
    const addToCart = (itemId) => {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeCartItem = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]- 1}))
    }
    // console.log(cartItem);
    const getTotalCartAmount = () => {
      let totalAmount = 0
      for (const item in cartItem) {
          if (cartItem[item] > 0) {
              let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
              console.log(itemInfo);
              totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const ContextValue = {
      cartItem,
      addToCart,
      removeCartItem,
      getTotalCartAmount,
    }
    return (
        <ShopContext.Provider value={ContextValue} >
            {props.children}
        </ShopContext.Provider>
    )
    
}
