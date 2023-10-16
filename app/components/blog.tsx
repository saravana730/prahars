'use client';
import React from 'react';
import '../styles/styles.css';
import Image from 'next/image';
import forward_arrow from "/public/blog/icons8-forward-100.png";
import { useEffect, useState } from 'react';

// import calendar from '../blog/calendar.png';
// import sheet from '/blog/news.png';
// import profile from '/blog/owner.png';

export default function Blogs(){
    const [isVisible, setIsVisible] = useState(false);
//   const [isLogo, setLogoVisible] = useState(false)

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
        <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
            <div className="desktopBlog">
                <div className="blog_page">
                    <div className="blog_content">
                        Know why at <br />
                        <span style={{color:"#df0070"}}>our blogs</span>
                        <div className="empty_box"></div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="flex flex-col">
                                            <div className="bg_image_1"></div>
                                            <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                            <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br/> 
                                                most popular ways to promote products and services<br/> 
                                                online.
                                            </div>
                                            {/* <button>
                                                <div className='flex items-center justify-end '>
                                                    <div className="flex flex-row md:gap-2">
                                                        <div className="blog_outlined_button">Read More</div>
                                                        <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                    </div>
                                                </div>
                                            </button> */}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="bg_image_2"></div>
                                            <div className="blog_title">Social Media Marketing - A Guide</div>
                                            <div className="blog_desc">Social media marketing is one of the most efficient and<br/>
                                            effective ways to connect with customers and promote<br/> 
                                            your brand.
                                            </div>
                                            {/* <div className="blog_empty_box"></div> */}
                                            {/* <button>
                                                <div className='flex items-center justify-end '>
                                                    <div className="flex flex-row md:gap-2">
                                                        <div className="blog_outlined_button">Read More</div>
                                                        <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                    </div>
                                                </div>
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="mobileBlog">
                    <div className="blog_page">
                        <div className="blog_content">
                            Know why at <br />
                            <span style={{color:"#df0070"}}>our blogs</span>
                            <div className="empty_box"></div>
                                {/* <div className="flex flex-row justify-between"> */}
                                    <div className="flex flex-col">
                                        {/* <div className="flex flex-row"> */}
                                            <div className="flex flex-col">
                                                <div className="bg_image_1"></div>
                                                <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                                <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br/> 
                                                    most popular ways to promote products and services<br/> 
                                                    online.
                                                </div>
                                                {/* <button>
                                                    <div className='flex items-center justify-end '>
                                                        <div className="flex flex-row md:gap-2">
                                                            <div className="blog_outlined_button">Read More</div>
                                                            <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                        </div>
                                                    </div>
                                                </button> */}
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="bg_image_2"></div>
                                                <div className="blog_title">Social Media Marketing - A Guide</div>
                                                <div className="blog_desc">Social media marketing is one of the most efficient and<br/>
                                                effective ways to connect with customers and promote<br/> 
                                                your brand.
                                                </div>
                                                {/* <div className="blog_empty_box"></div> */}
                                                {/* <button>
                                                    <div className='flex items-center justify-end '>
                                                        <div className="flex flex-row md:gap-2">
                                                            <div className="blog_outlined_button">Read More</div>
                                                            <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                        </div>
                                                    </div>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                        </div>
                    </div>
                </div>
            // </div>
        
    )
}