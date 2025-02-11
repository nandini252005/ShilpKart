// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import Deals from './components/Deals';    // Import the Deals component
import Products from './components/Products'; // Import the Products component
import Cart from './Cart'; // Import the Cart page
import './App.css';  // Import your styles
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />  {/* This will include the Cart icon */}
        
        {/* Define Routes */}
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={
            <>
              <Deals />
              <Products />
              
              <Footer />
            </>
          } />
          
          {/* Route for Cart Page */}
          <Route path="/cart" element={<Cart />} />  {/* Cart page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
