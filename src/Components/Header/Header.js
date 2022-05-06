import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import pic from "../../Images/logo-budget.png";

const Header = () => {
    return (
        <div className='main'>
            <nav className='nav-ber navbar navbar_top '>

            <div className="container">
              <Link className="navbar-brand" to="/">
              <img src={pic} alt="" width="100" height="70" />
              </Link>

            <Link className='link' to="/home">Home</Link>
             <Link className='link' to="/inventory">Inventory</Link>
             <Link className='link' to="/dealer">Dealer</Link>
             <Link className='link' to="/about">About</Link>
             <Link className='link' to="/contact">Contact</Link>
             <Link className='link' to="/signup">Sign up</Link>
             <Link className='link' to="/signin">Sign in</Link>
            </div>
             </nav>
        </div>
    );
};

export default Header;