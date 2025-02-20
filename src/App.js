
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Deals from './components/Deals';    
import Products from './components/Products'; 
import Cart from './Cart'; 
import './App.css';  
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Header />  
        <Routes>
          <Route path="/" element={
            <>
              <Deals />
              <Products />

              <Footer />
            </>
          } />
          
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
