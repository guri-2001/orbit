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
import ProfessionalInstallation from './components/Services/ProfessionalInstallation'
import LiveMonitoring from './components/Services/LiveMonitoring'
import SecurityIntegration from './components/Services/SecurityIntegration'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<AboutUs />} ></Route>
          <Route path="/services" element={<ServicesPage />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/products" element={<Products />} ></Route>
          <Route path="/services/professional-installation" element={<ProfessionalInstallation />} />
          <Route path="/services/live-monitoring" element={<LiveMonitoring />} />
          <Route path="/services/security-integration" element={<SecurityIntegration />} />
        </Routes>
        <Outlet />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
