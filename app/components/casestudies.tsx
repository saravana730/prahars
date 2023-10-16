'use client';
import '../styles/styles.css';
import { useEffect, useState } from 'react';

export default function CaseStudies(){
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
        <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}  id="Casestudies">
            <div className='desktopCase'>
            <div className="flex caseStudiesPage flex-col pt-16 pb-16">
                <div className="flex pl-8 pr-8 flex-row md:gap-12">
                    <div className="flex flex-col md:gap-6 cardContainer1">
                        <div className="flex flex-col ">
                            <div className="caseTitle1">We Let <span className="caseTitle2">Our Work</span></div>
                            <div className="caseTitle3">Speak for itself. </div>
                        </div>
                        <div className="card1">
                            <div><img src="case studies/tabImage.png" className='card1Image1'/></div>
                            <div><img src="case studies/tabZoom.png" className='card1ImageZoom1'/></div>
                        </div>
                        <div className="cardTitle1">G-GADGETS</div>
                        <div className="cardContent1">Traffic increased by 29.16%</div>
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-20'>
                        <div className="card2"></div>
                        <div className="cardTitle1">SMV BUSINESS SOLUTIONS</div>
                        <div className="cardContent1">6 Sign-ups in a Month</div>
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-2'>
                        <div className="card3 justify-center"></div>
                        <div className="cardTitle1">SHORTFLIX</div>
                        <div className="cardContent1">Avg cost per download - 14 per Download</div>
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                </div>
                {/* <div className='flex flex-row items-center justify-center md:gap-16'>
                    <div className='flex flex-col md:gap-6 pt-20'>
                        <div className="card4"></div>
                        <div className="cardTitle1">DIALYSIS TRANSPORT</div>
                        <div className="cardContent1">Average conversion of 24 %.</div>
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-2'>
                        <div className="card5"></div>
                        <div className="cardTitle1">MUSIC TUBE</div>
                        <div className='flex flex-row'><div className="cardContent1">Increased the subscribers from 67k </div><div>to 85k</div></div>                    
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                </div> */}
                <div className='flex items-center justify-center pt-6'>
                    <div className='caseButton '>See All Work</div>
                </div>
            </div>
            </div>

            <div className='mobileCase'>
            <div className="flex justify-center items-center">
                <div className="flex caseStudiesPage flex-col pt-16 pb-16">
                {/* <div className="flex pl-8 pr-8 flex-row md:gap-12"> */}
                    <div className="flex flex-col md:gap-6 cardContainer1">
                        <div className="flex flex-col ">
                            <div className="caseTitle1">We Let <span className="caseTitle2">Our Work</span></div>
                            <div className="caseTitle3">Speak for itself. </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-6 pt-20">
                        <div className="card1">
                            <div><img src="case studies/tabImage.png" className='card1Image1'/></div>
                            <div><img src="case studies/tabZoom.png" className='card1ImageZoom1'/></div>
                        </div>
                        <div className="cardTitle1 pt-4">G-GADGETS</div>
                        <div className="cardContent1 pt-4">Traffic increased by 29.16%</div>
                        <div className="md: pt-4">
                            <div className='caseBox'> View Case Study <div className='arrow right'></div></div> 
                        </div>
                    </div>    
                    <div className='flex flex-col md:gap-6 pt-20'>
                        <div className="card2"></div>
                        <div className="cardTitle1 pt-4">SMV BUSINESS SOLUTIONS</div>
                        <div className="cardContent1 pt-4">6 Sign-ups in a Month</div>
                        <div className="md: pt-4">
                            <div className='caseBox'> View Case Study <div className='arrow right'></div></div> 
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-20'>
                        <div className="card3 justify-center"></div>
                        <div className="cardTitle1 pt-4">SHORTFLIX</div>
                        <div className="cardContent1 pt-4">Avg cost per download - 14 per Download</div>
                        <div className="md: pt-4">
                            <div className='caseBox'> View Case Study <div className='arrow right'></div></div> 
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className='flex flex-row items-center justify-center md:gap-16'>
                    <div className='flex flex-col md:gap-6 pt-20'>
                        <div className="card4"></div>
                        <div className="cardTitle1">DIALYSIS TRANSPORT</div>
                        <div className="cardContent1">Average conversion of 24 %.</div>
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-2'>
                        <div className="card5"></div>
                        <div className="cardTitle1">MUSIC TUBE</div>
                        <div className='flex flex-row'><div className="cardContent1">Increased the subscribers from 67k </div><div>to 85k</div></div>                    
                        <div className='caseBox'> View Case Study <div className='arrow right'></div></div>
                    </div>
                </div> */}
                <div className='flex items-center justify-center pt-20'>
                    <div className='caseButton '>See All Work</div>
                </div>
                </div>
            </div>

            
            </div>
        </div>
    )
}


