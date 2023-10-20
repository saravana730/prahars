'use client';
import React from 'react';
import 'styles/styles.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link';


export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push("/");

    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log(section)
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
        // e.stopPropagation();
        setIsOpen(!isOpen);
      }
    }

  }




  return (
    <div className='navbar'>
      <nav className=' navbarItemsBox'>
        <div className={`navbarLogo ${isOpen ? 'open' : ''}`}><img src="logo.png" className="w-32" /></div>
        {/* <div className=''> */}
        {/* <div className='menu'><img src="menuIcon.png"/></div> */}
        <div className={`navbarMenu ${isOpen ? 'open' : 'visibleHidden'}`}>
          <ul className="itemsList md:gap-8 ">
            <li className="home" onClick={() => scrollToSection("Home")}><a onClick={handleToggle}>Home</a></li>
            {/* <li className="about" onClick={() => scrollToSection("footer")}><a onClick={handleToggle}>About Us</a></li> */}
            <li className="service" onClick={() => scrollToSection("Services")}><a onClick={handleToggle}>Services</a></li>
            <li className="caseStudies" onClick={() => scrollToSection("Casestudies")}><a onClick={handleToggle}>Case Studies</a></li>
            {/* <li className="career" onClick={() => scrollToSection("footer")}><a onClick={handleToggle}>Career</a></li> */}
            <li className="blog"><Link href="/blogs">Blog</Link></li>
          </ul>
        </div>
        <div className="hamburger-icon " onClick={handleToggle}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <div className='contactButton' onClick={() => scrollToSection("footer")}>Contact Us</div>
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