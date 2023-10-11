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
        // <div  className={`scroll-services ${isVisible ? '' : ''}`}>
            <div className="services_page">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col   ">
                        <div className="our_services">OUR SERVICES</div>
                        {/* <div className="empty_box"></div> */}
                        <div className="for_us_padding">
                            <div className="for_us">For us, this is</div>
                            <div className="for_us">all in <span style={{color:"#df0070"}}>a day's</span></div>
                            <div className="for_us"><span style={{color:"#df0070"}}>work.</span></div>
                        </div>
                        <div className="empty_box"></div>
                        {/* <div>
                            <button className="outlined-button">
                                <div className="flex flex-row md: gap-1">
                                    <div>Read More</div>
                                    <div className="img_padding"><Image src={forward_arrow} alt='>' width={25} height={25} /></div>
                                </div>
                            </button>
                        </div> */}
                    </div>
                    <div className="branding_padding">
                        <div className="flex flex-col">
                            <div><Image src={sample_img_1} alt={"png"} width={50} height={50}/></div>
                            <div className="branding_title">Branding</div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Market Research</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Brand Positioning</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Brand Identity Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Brand Collateral Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Branding for Startups</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Corporate Branding</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Product Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="branding_padding">
                        <div className="flex flex-col">
                            <div>
                                <Image src={sample_img_2} alt={"png"} width={50} height={50}/>
                            </div>
                            <div className="branding_title">Advertising and Marketing</div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">Performance Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">Digital Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">LinkedIn Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">Meta Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">Google Ads</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">SEO/SEM Services</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                            <div className="branding_content">Social Media Marketing</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty_box"></div>
                <div className="design_deploy">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col">
                        <div><Image src={sample_img_3} alt={"png"} width={50} height={50}/></div>
                            <div className="branding_title">Design and Deployment</div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                                <div className="branding_content">Bespoke Website Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>                                <div className="branding_content">CMS(WordPress) Based Website</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                {/* <div>Hello</div> */}
                                <div><span className="branding_content_plus">+</span></div>
                                <div className="branding_content">E-Commerce Website(WooCommerce and Shopify)</div>
                            </div>  
                        </div>
                    </div> 
                </div>               
            </div>
        </div>
        // </div>
        
    )
}