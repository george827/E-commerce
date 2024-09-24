import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={ <ShopCategory category="mens"/>} />
          <Route path="/women" element={<ShopCategory category="mens" /> } />
          <Route path="/kids" element={<ShopCategory category="mens"/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
