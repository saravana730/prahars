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
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="bg_image_1"></div>
                                    <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                        <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br/> most popular ways to promote products and services<br/> online.</div>
                                            <div className="read_more_justify">
                                                <div className="read_more_row">Read More</div>
                                                <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                            </div>
                            </div>
                            <div className="right_side_blog">
                                <div className="col">
                                    <div className="bg_image_2"></div>
                                        <div className="blog_title">Social Media Marketing - A Guide</div>
                                            <div className="blog_desc">Social media marketing is one of the most efficient and<br/>
                                             effective ways to connect with customers and promote<br/> 
                                             your brand.
                                            </div>
                                            <button>
                                                    <div className="read_more_justify">
                                                        <div className="blog_outlined_button">Read More</div>
                                                        {/* <div className="blog_outlined_button">for more details...</div> */}
                                                        <div className="blog_img_padding"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                    </div>
                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="bg_image_"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}