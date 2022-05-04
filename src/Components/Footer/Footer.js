import React from 'react';
import { Link } from 'react-router-dom';
import pic from "../../Images/logo-budget.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
                <footer className='footer container'>  
                    <div className='logo-address'>
                    <img src={pic} alt="" width="100" height="70" />
                        <p>Wave, Via Habro Derennio 22/b 52100 Arezzo, Italy</p>
                    <Link to="mailto:webmaster@example.com">webmaster@example.com</Link>
                    <br></br>
                    <Link to="tel:555-666-7777">555-666-7777 (Tool Free)</Link>
                    </div>

                    <div className='our-info'>
                        <ul>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Blog</li>
                            <li>Shop</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className='quick-link'>
                        <ul>
                            <li>Private Policy</li>
                            <li>Team and Conditions</li>
                            <li>Copyright Notification</li>
                            <li>Private Policy</li>
                            <li>Team and Employee</li>
                        </ul>
                    </div>

                    <div className='subscribe-us'>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                            <span className="input-group-text" id="basic-addon1">Send</span>
                        </div>

                        <div className="btn-group p-4 " role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary"><i className="fa-brands fa-facebook fa-2xl "></i></button>
                            <button type="button" className="btn btn-outline-primary"><i className="fa-brands fa-instagram fa-2xl"></i></button>
                            <button type="button" className="btn btn-outline-primary"><i className="fa-brands fa-twitter fa-2xl"></i></button>
                            <button type="button" className="btn btn-outline-primary"><i className="fa-brands fa-linkedin fa-2xl"></i></button>
                        </div>

                    </div>
                </footer>
        </div>
    );
};

export default Footer;