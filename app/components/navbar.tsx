'use client';
import React from 'react';
import '../styles/styles.css';

export default function Navbar(){
    return (
       <nav className='navbar'>
        <div><img src="logo.png"/></div>
        <div className='navbarItemsBox'>
            <div>
            <ul className="flex flex-row md:gap-8">
                <li className="navbarItems">Home</li>
                <li className="navbarItems">About Us</li>
                <li className="navbarItems">Services</li>
                <li className="navbarItems">Case Studies</li>
                <li className="navbarItems">Career</li>
                <li className="navbarItems">Blog</li>
            </ul>
            </div>
            <div className='contactButton'>Contact Us</div>
        </div>
       </nav>
    )
}