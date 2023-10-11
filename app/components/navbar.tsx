'use client';
import React from 'react';
import '../styles/styles.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar(){

    const [isOpen, setIsopen] = useState(false);
  const handleToggle = (e: { stopPropagation: () => void; }) => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        setIsopen(!isOpen);
      }
    }
    
  }

    return (
        <div className='navbar'>
       <nav className=' navbarItemsBox'>
        <div><img src="logo.png" className="w-32"/></div>
        {/* <div className=''> */}
            <div>
            <ul className="flex flex-row md:gap-8 ">
                <li className="home">Home</li>
                <li className="about">About Us</li>
                <li className="service">Services</li>
                <li className="caseStudies">Case Studies</li>
                <li className="career">Career</li>
                <li className="blog"><a href="/blog">Blog</a></li>
            </ul>
            </div>
            <div className='contactButton'>Contact Us</div>
        {/* </div> */}
       </nav>
       <div className="hamburger-icon " onClick={handleToggle}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
       </div>
    )
}