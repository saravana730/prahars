'use client';
import React from 'react';
import '../styles/styles.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar(){
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  //   const [isOpen, setIsopen] = useState(false);
  // const handleToggle = (e: { stopPropagation: () => void; }) => {
  //   if (typeof window !== 'undefined') {
  //     if (window.innerWidth <= 768) {
  //       e.stopPropagation();
  //       setIsopen(!isOpen);
  //     }
  //   }
    
  // }
  
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = (e: { stopPropagation: () => void; }) => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }
      }
      
    }
  

 

    return (
        <div className='navbar'>
       <nav className=' navbarItemsBox'>
        <div className={`navbarLogo ${isOpen ? 'open' : ''}`}><img src="logo.png" className="w-32"/></div>
        {/* <div className=''> */}
          {/* <div className='menu'><img src="menuIcon.png"/></div> */}
            <div className={`navbarMenu ${isOpen ? 'open' : 'visibleHidden'}`}>
                <ul className="itemsList md:gap-8 ">
                    <li className="home" onClick={() => scrollToSection("Home")}>Home</li>
                    <li className="about" onClick={() => scrollToSection("About Us")}>About Us</li>
                    <li className="service" onClick={() => scrollToSection("Services")}>Services</li>
                    <li className="caseStudies" onClick={() => scrollToSection("Casestudies")}>Case Studies</li>
                    <li className="career" onClick={() => scrollToSection("About Us")}>Career</li>
                    <li className="blog"><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="hamburger-icon " onClick={handleToggle}>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>

            <div className='contactButton'>Contact Us</div>
        {/* </div> */}
       </nav>
       {/* <div className="hamburger-icon " onClick={handleToggle}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div> */}
       </div>
    )
}