import React from 'react'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './app/Home'
import AboutUs from './app/About/AboutUs'
import Footer from './components/Footer/Footer'
import ServicesPage from './app/Services/Services'
import Contact from './app/Contact/Contact'
import Products from './app/Products/Products'
import ServiceDetail from './components/Services/ServiceDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<AboutUs/>} ></Route>
          <Route path="/services" element={<ServicesPage/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/products" element={<Products/>} ></Route>
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        </Routes>
        <Outlet />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
