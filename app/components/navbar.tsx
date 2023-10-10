'use client';
import React from 'react';
import '../styles/styles.css';
import Link from 'next/link';

export default function Navbar(){
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
                <li className="blog"><Link href=""></Link>Blog</li>
            </ul>
            </div>
            <div className='contactButton'>Contact Us</div>
        {/* </div> */}
       </nav>
       </div>
    )
}