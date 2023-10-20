'use client';
import React from 'react';
import 'styles/styles.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import sample_img_1 from "public/services/WhatsApp_Image_2023-10-04_at_13.09.13_efd54f86-removebg-preview.png";
import sample_img_2 from "/public/services/performance.png";
import sample_img_3 from "/public/services/coding.png";
import forward_arrow from "/public/services/icons8-forward-100.png";


export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = 1950;

            if (scrollTop > triggerPoint) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
            console.log(scrollTop)
            console.log(triggerPoint)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={` ${isVisible ? '' : 'opacity-0'}`} id="Services">

            <div className="services_page">
                <div className="flex flex-col">
                    <div className="for_us">Our <span className="caseTitle2">Services</span></div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="flex flex-col   ">
                                {/* <div className="for_us">Our <span className="caseTitle2">Services</span></div> */}
                                {/* <div className="empty_box"></div> */}
                                {/* <div className="for_us_padding">
                                    <div className="for_us">For us, this is</div>
                                    <div className="for_us">all in <span style={{color:"#df0070"}}>a day's</span></div>
                                    <div className="for_us"><span style={{color:"#df0070"}}>work.</span></div>
                                </div> */}
                                {/* <div>
                                    <button className="outlined-button">
                                        <div className="flex flex-row md: gap-1">
                                            <div>Read More</div>
                                            <div className="img_padding"><Image src={forward_arrow} alt='>' width={25} height={25} /></div>
                                        </div>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className={`branding_padding ${isVisible ? 'servicesAnimationBranding ' : ''}`}>
                            <div className="flex flex-col">
                                <div><Image src={sample_img_1} alt={"png"} width={50} height={50} /></div>
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
                        <div className={`branding_padding ${isVisible ? 'servicesAnimationBranding ' : ''}`}>
                            <div className="flex flex-col">
                                {/* <div className="design_deploy"> */}
                                <div><Image src={sample_img_3} alt={"png"} width={50} height={50} /></div>
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
                                {/* </div> */}
                            </div>
                        </div>

                        <div className={`branding_padding ${isVisible ? ' servicesAnimationadvertising' : ''}`}>
                            <div className="flex flex-col">
                                <div>
                                    <Image src={sample_img_2} alt={"png"} width={50} height={50} />
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
                    {/* <div className="design_deploy">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col">
                            <div><Image src={sample_img_3} alt={"png"} width={50} height={50}/></div>
                                <div className="branding_title">Design and Deployment</div>
                                <div className="flex flex-row md: gap-4">
                                    <div><span className="branding_content_plus">+</span></div>                                <div className="branding_content">Bespoke Website Design</div>
                                </div>
                                <div className="flex flex-row md: gap-4">
                                    <div><span className="branding_content_plus">+</span></div>                                <div className="branding_content">CMS(WordPress) Based Website</div>
                                </div>
                                <div className="flex flex-row md: gap-4">
                                    <div><span className="branding_content_plus">+</span></div>
                                    <div className="branding_content">E-Commerce Website(WooCommerce and Shopify)</div>
                                </div>  
                            </div>
                        </div> 
                    </div>                */}
                </div>
            </div>



            <div className="mobileServices">
                <div className="services_top_padding">
                    <div className="flex flex-col">
                        <div className="for_us_mobile">Our <span className="caseTitle2_mobile">Services</span></div>
                        {/* <div className="for_us_padding">
                        <div className="for_us_mobile">For us, this is all in</div>
                        <div className="for_us_mobile"><span style={{color:"#df0070"}}>a day's work.</span></div>
                    </div> */}
                        <div className="branding_padding_mobile">
                            <div className="flex flex-row">
                                <div className="branding_img_padding"><Image src={sample_img_1} alt={"png"} width={40} height={40} /></div>
                                <div className="branding_title_mobile">Branding</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Market Research</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Brand Positioning</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Brand Identity Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Brand Collateral Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Branding for Startups</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Corporate Branding</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Product Branding</div>
                            </div>
                        </div>

                        <div className="branding_padding_mobile">
                            <div className="flex flex-row">
                                <div className="branding_img_padding"><Image src={sample_img_2} alt={"png"} width={40} height={40} /></div>
                                <div className="branding_title_mobile">Advertising and Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Performance Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Digital Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">LinkedIn Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Meta Marketing</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Google Ads</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">SEO/SEM Services</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Social Media Marketing</div>
                            </div>
                        </div>

                        <div className="branding_padding_mobile">
                            <div className="flex flex-row">
                                <div className="branding_img_padding"><Image src={sample_img_3} alt={"png"} width={40} height={40} /></div>
                                <div className="branding_title_mobile">Design and Deployment</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">Bespoke Website Design</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">CMS (WordPress) Based Website</div>
                            </div>
                            <div className="flex flex-row md: gap-4">
                                <div className="branding_content_plus_mobile">+</div>
                                <div className="branding_content_mobile">E-Commerce Website (WooCommerce & Shopify)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}