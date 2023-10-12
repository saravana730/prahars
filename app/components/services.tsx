'use client';
import React from 'react';
import '../styles/styles.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import sample_img_1 from "public/services/WhatsApp_Image_2023-10-04_at_13.09.13_efd54f86-removebg-preview.png";
import sample_img_2 from "/public/services/performance.png";
import sample_img_3 from "/public/services/coding.png";
import forward_arrow from "/public/services/icons8-forward-100.png";


export default function Services(){
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const triggerPoint = window.innerHeight * 0.4;
          const triggerPointLogo = window.innerHeight * 0.2;
          // Adjust this value as needed
          setIsVisible(scrollTop > triggerPoint);
        //   setLogoVisible(scrollTop > triggerPointLogo);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <div></div>
    )

}