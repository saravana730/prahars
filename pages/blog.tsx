'use client';
import React from 'react';
import '../app/styles/styles.css'
import Image from 'next/image';
import forward_arrow from "/public/blog/icons8-forward-100.png";
import Navbar from '@/app/components/navbar';
// import calendar from '../blog/calendar.png';
// import sheet from '/blog/news.png';
// import profile from '/blog/owner.png';

export default function Blogs() {
    return(
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
                                    <div className="blog_empty_box"></div>
                                    <button>
                                        <div className='flex items-center justify-end '>
                                            <div className="flex flex-row md:gap-2">
                                                <div className="blog_outlined_button">Read More</div>
                                                <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                            </div>
                                        </div>
                                    </button>
                                    {/* <div className="blog_empty_box"></div>
                                    <div className="flex flex-row justify-between">
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_calendar"></div>
                                        <div className="blog_footer_txt">October 25, 2023</div>
                                       </div>
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_news"></div>
                                        <div className="blog_footer_txt">blog</div>
                                       </div>
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_profile"></div>
                                        <div className="blog_footer_txt">Prahars</div>
                                       </div>
                                    </div> */}
                                </div>


                                <div className="vertical_empty_box"></div>


                                <div className="flex flex-col">
                                    <div className="bg_image_2"></div>
                                    <div className="blog_title">Social Media Marketing - A Guide</div>
                                    <div className="blog_desc">Social media marketing is one of the most efficient and<br/>
                                     effective ways to connect with customers and promote<br/> 
                                     your brand.
                                    </div>
                                    <div className="blog_empty_box"></div>
                                    <button>
                                        <div className='flex items-center justify-end '>
                                            <div className="flex flex-row md:gap-2">
                                                <div className="blog_outlined_button">Read More</div>
                                                <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                            </div>
                                        </div>
                                    </button>
                                    {/* <div className="blog_empty_box"></div> */}
                                    {/* <div className="flex flex-row justify-between">
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_calendar"></div>
                                        <div className="blog_footer_txt">October 25, 2023</div>
                                       </div>
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_news"></div>
                                        <div className="blog_footer_txt">blog</div>
                                       </div>
                                       <div className="flex flex-row md:gap-2">
                                        <div className="blog_footer_img_profile"></div>
                                        <div className="blog_footer_txt">Prahars</div>
                                       </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div className="bg_image_2"></div> */}
            </div>
        </div>
        
    )
}