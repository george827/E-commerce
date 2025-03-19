// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop /> } />
          <Route path="/men" element={<ShopCategory category="men" /> } />
          <Route path="/women" element={<ShopCategory category="men" /> } />
          <Route path="/kids" element={<ShopCategory category="kids" /> } />
          <Route path=":productId" element={<Product /> } >
          <Route path=":productId" element={<Product />} />
           </Route>
        <Route path="/cart" element={<Cart /> } />
        <Route path="/login" element={<LoginSignup /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
