'use client';
import React from 'react';
import '../styles/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

export default function Testimonials(): React.JSX.Element{
    const testimonials=[
        {
            id:1,
            rating:'4.5',
            content:'The Team does a fantastic job, They take care of Entire marketing in Digital Space, which in turns helps us to concentrates only on Operations Part. ',
            companyName:'Hooks & Yarns'
        },
        {
            id:2,
            rating:'4.5',
            content:'They never compromise on Quality, We are excited to with you! Highly recommended team for Visual Marketing and B2B Marketing.',
            companyName:'Digi Inn Automation'
        },
        {
            id:3,
            rating:'4.5',
            content:'Our Social Media Pages are Maintained by Harish Digital Team in Extraordinary Manner, They Generate Valuable leads which in turn helps our Business Growth. ',
            companyName:'Jayavilas Hero'
        },
        {
            id:4,
            rating:'4.5',
            content:'The Team does a fantastic job, They take care of Entire marketing in Digital Space, which in turns helps us to concentrates only on Operations Part. ',
            companyName:'Hooks & Yarns'
        },
        {
            id:5,
            rating:'4.5',
            content:'They never compromise on Quality, We are excited to with you! Highly recommended team for Visual Marketing and B2B Marketing.',
            companyName:'Digi Inn Automation'
        }, {
            id:6,
            rating:'4.5',
            content:'Our Social Media Pages are Maintained by Harish Digital Team in Extraordinary Manner, They Generate Valuable leads which in turn helps our Business Growth. ',
            companyName:'Jayavilas Hero'
        },{
            id:7,
            rating:'4.5',
            content:'The Team does a fantastic job, They take care of Entire marketing in Digital Space, which in turns helps us to concentrates only on Operations Part. ',
            companyName:'Hooks & Yarns'
        },
        {
            id:8,
            rating:'4.5',
            content:'They never compromise on Quality, We are excited to with you! Highly recommended team for Visual Marketing and B2B Marketing.',
            companyName:'Digi Inn Automation'
        }, {
            id:9,
            rating:'4.5',
            content:'Our Social Media Pages are Maintained by Harish Digital Team in Extraordinary Manner, They Generate Valuable leads which in turn helps our Business Growth. ',
            companyName:'Jayavilas Hero'
        }

    ]
    const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      }
    }
  }, []);
  const [isVisible, setIsVisible]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5;
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

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: false,
        prevArrow: <div className="custom-arrow custom-arrow-left" />,
        nextArrow: <div className="custom-arrow custom-arrow-right" />,
    
      };

      const settings_mobile = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: false,
        prevArrow: <div className="custom-arrow custom-arrow-left" />,
        nextArrow: <div className="custom-arrow custom-arrow-right" />,
    
      };
    
   
    return(
        <div className='testimonials '>
            <div className="desktopTestimonials">
                <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
                <div className='flex flex-col pt-4 pb-4 pl-10'>
                    <div className='testimonialTitle1 '><span className='testimonialTitle2 '>Clients love us</span>, but</div>
                    <div className='testimonialTitle1 '>don’t take our word</div>
                    <div className='testimonialTitle1 '>for it.</div>
                </div>
                <div className='testimonialsContent '>
                    <div className=' flex flex-row md:gap-4 pt-6 pl-10'>
                        <div className="testimonialContent">Prahars Review</div>
                        <div className="testimonialContent">4.5</div>
                        <div className='flex flex-row pt-1'>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starHalf.png" className='w-6'/></div>
                        </div>
                    </div>
                    <div className='pl-24 pr-24'>
                    <Slider {...settings}> 
                    
                    {testimonials.map((item) => (
                    <div key={item.id} className="pt-8">
                    <div className='flex flex-col items-center justify-center'>
                        <div className='testimonialContainer'>
                            <div className='flex flex-row md:gap-2'>
                                <div className='testCompanyValue'>{item.rating}</div>
                                <div className='flex flex-row '>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starFilled.png" className='w-6'/></div>
                                    <div><img src="starHalf.png" className='w-6'/></div>
                                </div>
                            </div>
                            <div className='flex flex-wrap testCompanyContent '>{item.content}</div>
                            <div className='testCompanyName '>{item.companyName}</div>
                        </div>
                    </div>
                    </div>
                    ))}
                    </Slider>
                    </div>
                </div>
                </div>
            </div>

            <div className="mobileTestimonials">
                <div className="testimonial_top_padding"> 
                    <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
                    <div className='flex flex-col pt-4 pb-4'>
                        <div className='testimonialTitle1_mobile '><span className='testimonialTitle2_mobile'>Clients love us</span>, but</div>
                        <div className='testimonialTitle1_mobile '>don’t take our word</div>
                        <div className='testimonialTitle1_mobile '>for it.</div>
                    </div>
                    <div className='testimonialsContent '>
                        <div className=' flex flex-row md:gap-4 pt-6 pl-10'>
                            <div className="testimonialContent">Prahars Review</div>
                        </div>
                        <div className=' flex flex-row md:gap-4 pt-6 pl-10'>
                            <div className='flex flex-row pt-1'>
                                
                                        <div className="testimonialContent">4.5</div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starHalf.png" className='w-6'/></div>
                            </div>
                        </div>
                        <div className='pl-8 pr-8'>
                        <Slider {...settings_mobile}> 
                        
                        {testimonials.map((item) => (
                        <div key={item.id} className="pt-8">
                        <div className='flex flex-col items-center justify-center'>
                            <div className='testimonialContainer_mobile'>
                                <div className='flex flex-row md:gap-2'>
                                    <div className='testCompanyValue'>{item.rating}</div>
                                    <div className='flex flex-row '>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starFilled.png" className='w-6'/></div>
                                        <div><img src="starHalf.png" className='w-6'/></div>
                                    </div>
                                </div>
                                <div className='flex flex-wrap testCompanyContent '>{item.content}</div>
                                <div className='testCompanyName '>{item.companyName}</div>
                            </div>
                            <div className=""> {item.id}  of  9 </div>
                            <div className="custom-arrow custom-arrow-left"></div>
                            <div className="custom-arrow custom-arrow-right"></div>
                            <div className=""></div>
                        </div>
                        </div>
                        ))}
                        </Slider>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}