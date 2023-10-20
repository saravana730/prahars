import Banner from '@/components/banner'
import CaseStudies from '@/components/casestudies'
import Clients from '@/components/clients'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import React from 'react'
import 'styles/mobile.css'
import 'styles/styles.css'
import './globals.css'
import 'styles/constants.css'

const Page = () => {
    return (

        <>
            <div className='LandingPage'>
                <Navbar />
                <Banner />
                <div><CaseStudies /></div>
                <div>
                    <Clients />
                </div>
                <div>
                    <Services />
                </div>
                <div>
                    {/* <Blogs /> */}
                </div>
                <div>
                    <Testimonials />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Page;