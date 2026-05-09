import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import LandingPage from "./pages/LandingPage";
import { createContext } from "react";

export const CartContext=createContext();

// const CartProvider=({children})=>{

//   return(
//     <CartContext.Provider>
//       {children}
//     </CartContext.Provider>
//   )
// }




const App=()=>{
  return(
    <BrowserRouter>
    <CartContext.Provider>
      <NavBar/>
       <Routes>
      <Route path="" element={<LandingPage/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
    </Routes>
    </CartContext.Provider>
    </BrowserRouter>
  )
}
export default App;