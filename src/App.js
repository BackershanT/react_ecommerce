import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import ProductList from './pages/ProductList/ProductList';
// import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Admin from './pages/Admin/Admin';
// import Login from './components/Login/Login';
function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />


    </Routes>
   </Router>
  );
}

export default App;
