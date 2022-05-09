import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='app'>
        <section class="notFound">
        <div className="img">
        <img className='pageText' src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img className='pageImag' src=" https://s.tmimgcdn.com/scr/1200x750/122600/error-page-not-found-illustration_122693-original.jpg" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        </div>
    </section>
        </div>
    );
};

export default NotFound;