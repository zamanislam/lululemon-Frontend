import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Product from "./components/ProductPage";
import Cart from "./components/cart";
import Signup from "./components/Signup";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ProductPage from './components/ProductPage';

function App() {
  
  return (
    <>
     <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductPage/>}/>
      </Routes>
      </div> 
    </>
  )
}

export default App
