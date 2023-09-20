import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import  ShopContextProvider from "./context/SourceContext";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {/* ise hatane se navbar is removed during cart items */}
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
