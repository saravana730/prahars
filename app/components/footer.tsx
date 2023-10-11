


export default function Footer(){
    return(
        <div className="footer mt-8">
            <div className="pt-24 pl-6 pr-6">
            <div className="footerContainer  ">
                <div className="footerContainerContent1">READY TO LEVERAGE DIGITAL ?</div>
                <div className="footerContainerContent2">Your Great <span className="footerContainerContent2-sub">Digital Marketing Service Awaits</span></div>
                <div className="footerContainerContent3">Let’s discuss how <span className="footerContainerContent3-sub">Prahars</span> can help you grow your business.</div>
            </div>
            </div>
            <div className="pt-12 pb-12">
                <hr className="footerSeparator"></hr>
            </div>  
            <div className="ml-6 mr-6">
                <div className="flex flex-row justify-between ">    
                    <div className="flex flex-col items-center justify-center">
                        <div className="footerImage"><img src="logoPrahars.png" className=""/></div>
                        <div className="flex flex-row md:gap-2 pt-2">
                            <div className="flex items-center"><img src="copyright.png"></img></div>
                            <div className="copyrightContent">2023 Prahars </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col md:gap-10">
                            <div className="footerHeading">Company</div>
                            <div className="flex flex-col md:gap-2">
                                <div className="footerCompany">Home</div> 
                                <div className="footerCompany">Services</div> 
                                <div className="footerCompany">Case Studies</div> 
                                <div className="footerCompany">Blog</div> 
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4">
                        <div className="flex flex-col ">
                            <div className="footerHeading">Who We</div>
                            <div className="footerHeading footerWhoContent">Are</div>
                         </div>
                         <div className="flex flex-col md:gap-1.5">
                            <div className="footerCompany">About</div> 
                            <div className="footerCompany">Career</div> 
                         </div>
                    </div>
                    <div className="flex flex-col md:gap-10">
                        <div className="footerHeading">Find Us</div>
                        <div className="flex flex-col md:gap-2">
                            <div className="flex flex-row md:gap-3">
                                <div className="flex items-center"><img src="/footer/facebook.png" className="w-6"/></div>
                                <div className="footerCompany">Facebook</div> 
                            </div>
                            <div className="flex flex-row md:gap-3">
                                <div className="flex items-center"><img src="/footer/instagram.png" className="w-6"/></div>
                                <div className="footerCompany">Instagram</div> 
                            </div>
                            <div className="flex flex-row md:gap-3">
                                <div className="flex items-center"><img src="/footer/twitter.png" className="w-6"/></div>
                                <div className="footerCompany">Twitter</div> 
                            </div>
                            <div className="flex flex-row md:gap-3">
                                <div className="flex items-center"><img src="/footer/pinterest.png" className="w-6"/></div>
                                <div className="footerCompany">Pinterest</div> 
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-10">
                        <div className="footerHeading">Contact</div>
                        <div className="flex flex-col md:gap-2">
                            <div className="footerCompany">+91-80722 17403</div> 
                            <div className="footerCompany">+91-95389 37008 </div> 
                            <div className="footerCompany">+91-63690 39331 </div> 
                            <div className="footerCompany">+91 84381 84544</div> 
                        </div>
                    </div>
                    {/* <div className="flex flex-col md:gap-4">
                        <div className="flex flex-row md:gap-10">
                            <div className="footerHeading">Company</div>
                            <div className="flex flex-col">
                            <div className="footerHeading">Who We</div>
                            <div className="footerHeading">Are</div>
                            </div>
                            <div className="footerHeading">Find Us</div>
                            <div className="footerHeading">Contact</div>
                        </div>
                    </div> */}
                </div>
            </div>  
        </div>
    )
}