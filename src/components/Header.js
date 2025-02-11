import React from 'react';
import logo from '../images/logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <React.Fragment>
            <header className="header">
                <div className='logo-container'>
                <img className="logo-img" src={logo} alt='logo' />
                <h1 className="logo">ShilpKart</h1> 
                </div>
                <nav className="header-buttons">
                    <button>Home</button>
                    <button>Crafts</button>
                    <button>About</button>
                    <button>Contact</button>
                </nav>
                <div className="icons">
                    <i className="fas fa-user profile-icon"></i>
                    <Link to="/cart">  <i className="fas fa-shopping-cart cart-icon"></i> </Link>
                

                    <i className="fas fa-cog settings-icon"></i>
                </div>
            </header>
        </React.Fragment>
    );
}
