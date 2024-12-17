import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Component/Footer/Footer'
import LoginPopup from './Component/LoginPopup/LoginPopup'
const App = () => {

   const  [showLogin, setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
    <BrowserRouter>
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
      </div>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
