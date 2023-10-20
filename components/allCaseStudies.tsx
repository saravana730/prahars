'use client';
import React from 'react';
import 'styles/styles.css';
import 'styles/mobile.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import forward_arrow from "/public/blog/icons8-forward-100.png";
import Link from 'next/link';


export default function AllCaseStudies() {
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

    const blogs = [
        {
            id: 1,
            title: "G-GADGETS",
            description: "Traffic increased by 29.16%",
            img: '/case studies/temp1.png',
            link: "/casestudies_1",

        },
        {
            id: 2,
            title: "SMV BUSINESS SOLUTIONS",
            description: "6 Sign-ups in a Month",
            img: '/case studies/square-1.png',
            link: "/casestudies_2",
        },
        {
            id: 3,
            title: "SHORTFLIX",
            description: "Avg cost per download - 14 per Download",
            img: '/case studies/Frame 13.png',
            link: "/casestudies_3",

        },
        {
            id: 4,
            title: "DIALYSIS TRANSPORT",
            description: "Average conversion of 24 %.",
            img: '/case studies/thumbnail-1 (1).png',
            link: "/casestudies_4",
        },
        {
            id: 5,
            title: "MUSIC TUBE",
            description: "Increased the subscribers from 67k to 85k",
            img: '/blog/thumbnail (4).png',
            link: "/casestudies_5",

        },        
    ];

    return (
        <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
            <div className="desktopBlog">
                <div className="blog_page">
                    <div className="blog_content">
                        Know why at <br />
                        <span style={{ color: "#df0070" }}>our blogs</span>
                        <div className="empty_box"></div>
                        <div className="flex flex-row"> 
                       
                            <div  className="flex flex-row flex-wrap justify-around">
                            {blogs.map((item)=>(
                                <div key={item.id} className="name_blog_content">
                                    <div className="flex flex-col ">
                                        <div className="bg_image_1 "><img src={item.img}/></div>
                                        <div className="blog_title">{item.title}</div>
                                        <div className="blog_desc">{item.description}</div>
                                        <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href={item.link}>Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                    </div>
                                    </div>
                                    
                                </div>
                                ))}
                            </div>
                              
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mobileBlog">
                <div className="blog_page">
                    <div className="blog_content">
                        Know why at <br />
                        <span style={{ color: "#df0070" }}>our blogs</span>
                        <div className="empty_box"></div>
                        {/* <div className="flex flex-row justify-between"> */}
                        <div className="flex flex-col">
                            {/* <div className="flex flex-row"> */}
                            <div className="flex flex-col">
                                <div className="bg_image_1"></div>
                                <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br />
                                    most popular ways to promote products and services<br />
                                    online.
                                </div>
                                <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href="/blog_innerpage_2">Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                        {/* <a href='/blog_innerpage'></a> */}
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
                                {/* <div className="blog_title">Social Media Marketing - A Guide</div> */}
                                <div className="blog_desc">Social media marketing is one of the most efficient and<br />
                                    effective ways to connect with customers and promote<br />
                                    your brand.
                                </div>
                                <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href="/blog_innerpage_2">Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                        {/* <a href='/blog_innerpage'></a> */}
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