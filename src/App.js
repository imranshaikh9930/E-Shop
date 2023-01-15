import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import { ShopContextProvider } from "./Context/State_Context";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
