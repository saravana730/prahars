'use client';
import '../styles/styles.css';
import { useEffect, useState } from 'react';

export default function CaseStudies(){
    const [isVisible, setIsVisible] = useState(false);
//   const [isLogo, setLogoVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.1;
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
        <div   id="Casestudies">
            <div className='desktopCase'>
            <div className="flex caseStudiesPage flex-col pt-16 pb-16 w-full">
                <div className="flex pl-8 pr-8 flex-row md:gap-12 w-full">
                    <div className="flex flex-col md:gap-6 cardContainer1 card-container">
                        <div className="flex flex-col ">
                            <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
                                <div className="caseTitle1">Our <span className="caseTitle2">Works</span></div>
                                {/* <div className="caseTitle3">Speak for itself. </div> */}
                            </div>
                        </div>

                            <div className= {`card1 justify-center case-card ${isVisible ? 'card1Animation':''}`}>
                                {/* <div><img src="case studies/tabImage.png" className='card1Image1'/></div>
                                <div><img src="case studies/tabZoom.png" className='card1ImageZoom1'/></div> */}
                            </div>
                            <div className= {`cardTitle1 ${isVisible ? 'card1Animation':''}`}>G-GADGETS</div>
                            <div className={`cardContent1 ${isVisible ? 'card1Animation':''}`}>Traffic increased by 29.16%</div>
                            {/* <div className={`caseBox ${isVisible ? 'card1Animation':''}`}> View Case Study <div className='arrow right'></div></div> */}
                
                    </div>
                    <div className={`flex flex-col md:gap-6 pt-20 card-container ${isVisible ? 'card2Animation':''}`}>
                        <div className="card2 justify-center case-card"></div>
                        <div className="cardTitle1">SMV BUSINESS SOLUTIONS</div>
                        <div className="cardContent1">6 Sign-ups in a Month</div>
                        {/* <div className='caseBox'> View Case Study <div className='arrow right'></div></div> */}
                    </div>                      
                    <div className={` flex flex-col md:gap-6 pt-2 card-container ${isVisible ? 'card3Animation':''}`}>
                    
                        <div className="card3 justify-center case-card"></div>
                        <div className="cardTitle1">SHORTFLIX</div>
                        <div className="cardContent1">Avg cost per download - 14 per Download</div>
                        {/* <div className='caseBox'> View Case Study <div className='arrow right'></div></div> */}
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
            <div className="flex justify-center items-center ">
                <div className="flex caseStudiesPage flex-col pt-16 pb-16 w-full">
                {/* <div className="flex pl-8 pr-8 flex-row md:gap-12"> */}
                    <div className="flex flex-col md:gap-6 cardContainer1">
                        <div className="flex flex-col ">
                            <div className="caseTitle1_mobile">Our <span className="caseTitle2_mobile">Work</span></div>
                            {/* <div className="caseTitle3_mobile">Speak for itself. </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-6 pt-20 card-container-mobile">
                        <div className="card1 case-card">
                            {/* <div><img src="case studies/tabImage.png" className='card1Image1'/></div>
                            <div><img src="case studies/tabZoom.png" className='card1ImageZoom1'/></div> */}
                        </div>
                        <div className="cardTitle1 pt-4">G-GADGETS</div>
                        <div className="cardContent1 pt-4">Traffic increased by 29.16%</div>
                        <div className="md: pt-4">
                            {/* <div className='caseBox'> View Case Study <div className='arrow right'></div></div>  */}
                        </div>
                    </div>    
                    <div className='flex flex-col md:gap-6 pt-20 card-container-mobile'>
                        <div className="card2 case-card"></div>
                        <div className="cardTitle1 pt-4">SMV BUSINESS SOLUTIONS</div>
                        <div className="cardContent1 pt-4">6 Sign-ups in a Month</div>
                        <div className="md: pt-4">
                            {/* <div className='caseBox'> View Case Study <div className='arrow right'></div></div>  */}
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-6 pt-20 card-container-mobile'>
                        <div className="card3 justify-center case-card"></div>
                        <div className="cardTitle1 pt-4">SHORTFLIX</div>
                        <div className="cardContent1 pt-4">Avg cost per download - 14 per Download</div>
                        <div className="md: pt-4">
                            {/* <div className='caseBox'> View Case Study <div className='arrow right'></div></div>  */}
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


