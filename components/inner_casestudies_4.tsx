'use client';
import React from 'react';
import '/styles/styles.css'
import Image from 'next/image';

export default function InnerCaseStudies_4() {

    return(
        <div>
            <div className="desktopBlogInnerPage">
                <div className="innerpage_title">DIALYSIS TRANSPORT</div>
                <div className="image-container">
                    <div className="image-container img"><Image src="/case studies/thumbnail-1 (1).png" alt="Description of the image" width={1000} height={667} /></div>
                </div>
                <div className="innerpage_content_padding">
                <div className="blog_desc">
                    <div className="blog_desc_innerpage flex-wrap">
                        <div className="text-center">
                        Within 3 months 180 seats were filled with 720 leads
making an
Average conversion of 24 %.

                    </div>
                    </div>
                </div> 
                </div>
            </div>

            <div className="mobileBlogInnerPage">
                <div className="innerpage_title">DIALYSIS TRANSPORT</div>
                <div className="image-container_mobile">
                    <div className="image-container img_mobile"><Image src="/case studies/thumbnail-1 (1).png" alt="Description of the image" width={1000} height={667} /></div>
                </div>
                {/* <div style={{display: "flex", justifyContent:"center", backgroundSize:'contain', paddingTop:"40px"}}><div className="background_img"></div></div> */}
                <div className="innerpage_content_padding">
                <div className="blog_desc">
                    <div className="blog_desc_innerpage flex-wrap">
                    Within 3 months 180 seats were filled with 720 leads
making an
Average conversion of 24 %.

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