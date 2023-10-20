'use client';
import React from 'react';
import '/styles/styles.css'
import Image from 'next/image';

export default function InnerCaseStudies_5() {

    return(
        <div>
            <div className="desktopBlogInnerPage">
                <div className="innerpage_title">MUSIC TUBE</div>
                <div className="image-container">
                    <div className="image-container img"><Image src="/blog/thumbnail (4).png" alt="Description of the image" width={1000} height={667} /></div>
                </div>
                <div className="innerpage_content_padding">
                <div className="blog_desc">
                    <div className="blog_desc_innerpage flex-wrap">
                        <div className="text-center">
                        Increased the subscribers from 67k to 85k within 1 year
and 4 months organically.
                    </div>
                    </div>
                </div> 
                </div>
            </div>

            <div className="mobileBlogInnerPage">
                <div className="innerpage_title">MUSIC TUBE</div>
                <div className="image-container_mobile">
                    <div className="image-container img_mobile"><Image src="/blog/thumbnail (4).png" alt="Description of the image" width={1000} height={667} /></div>
                </div>
                {/* <div style={{display: "flex", justifyContent:"center", backgroundSize:'contain', paddingTop:"40px"}}><div className="background_img"></div></div> */}
                <div className="innerpage_content_padding">
                <div className="blog_desc">
                    <div className="blog_desc_innerpage flex-wrap">
                    Increased the subscribers from 67k to 85k within 1 year
and 4 months organically.
                    </div>
                </div> 
                </div>
            </div>
        </div>
    )

}



                {/* <div className="w-full overflow-hidden" style={{display:"flex", justifyContent: "center", maxWidth:"30vh", maxHeight:"30vh"}}>
                    <Image src="/blog/thumbnail (3).png" alt='Sample Image' width="200" height="500" layout="responsive" />
                </div> */}