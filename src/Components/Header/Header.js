import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import pic from "../../Images/logo-budget.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const[user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('header-sticky') : header.classList.remove('header-sticky');
    };
    return (
        <div className='main header-section d-none d-xl-block'>
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
             <li className='list-none'>{user ? <a className="btn btn-ghost normal-case text-xl" onClick={logout}>Sign Out</a> : <Link to="/login"  className='link'>log In</Link>}</li>
             <Link className='link' to="/regester">Register</Link>
            </div>
             </nav>
        </div>
    );
};

export default Header;