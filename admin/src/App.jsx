import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
           <Route path="/add" element={<Add></Add>}></Route>
           <Route path="/list" element={<List></List>}></Route>
           <Route path="/order" element={<Order></Order>}></Route>


        </Routes>
      </div>
    </div>
  )
}

export default App
