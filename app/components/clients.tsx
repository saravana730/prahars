'use client';
import React from 'react';
import '../styles/styles.css';
import { useEffect, useState } from 'react';


export default function Clients() {
    const [isVisible1, setIsVisible1] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = window.innerHeight * 0.8;
            const scrollValue = 1200;
            setIsVisible1(scrollValue > triggerPoint);
            console.log(scrollTop)
            console.log(triggerPoint)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const imageMobile = [
        {
            id: 1,
            image: '/clients/IMG_1729.PNG'
        },
        {
            id: 2,
            image: '/clients/IMG_1917.PNG'
        },
        {
            id: 3,
            image: '/clients/IMG_1973.PNG'
        },
        {
            id: 4,
            image: '/clients/IMG_2012-removebg-preview.png'
        },
        {
            id: 5,
            image: '/clients/IMG_2043.PNG'
        },
        {
            id: 6,
            image: '/clients/IMG_2064.PNG'
        },
        {
            id: 7,
            image: '/clients/IMG_2066.PNG'
        },
        {
            id: 8,
            image: '/clients/IMG_2068.PNG'
        },
        {
            id: 9,
            image: '/clients/IMG_2070.PNG'
        },
        {
            id: 10,
            image: '/clients/IMG_2071.PNG'
        },
        {
            id: 11,
            image: '/clients/IMG_2073.PNG'
        },
        {
            id: 12,
            image: '/clients/IMG_2075.PNG'
        },

    ]
    return (
        <div >
            <div className="desktopClients">
                <div className='flex items-center justify-center'>
                    <div className="clientsTitle1">Our Happy <span className="clientsTitle2">Customers</span></div>
                </div>
                <div className="clients_page">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row justify-between gap-4">
                            <div className="border_ice_courier client-item"></div>
                            <div className="border_insight_consulting client-item"></div>
                            <div className="border_kad_construction client-item"></div>
                            <div className="border_vd client-item"></div>
                        </div>
                        <div className="flex flex-row justify-between gap-4">
                            <div className="border_aruvadai client-item"></div>
                            <div className="border_saadhaga_paravaigal client-item"></div>
                            <div className="border_glimmerwood client-item"></div>
                            <div className="border_anandan_digital client-item"></div>
                        </div>
                        <div className="flex flex-row justify-between gap-4">
                            <div className="border_suryamithran client-item"></div>
                            <div className="border_unidesigns client-item"></div>
                            <div className="border_musictube client-item"></div>
                            <div className="border_shortflix client-item"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobileClients">
                <div className="clients_page_padding_mobile">
                    <div className="flex flex-col ">
                        <div className="justify-center">
                            <div className="clientsTitle1_mobile whitespace-nowrap">Our Happy <span className="clientsTitle2_mobile">Customers</span></div>
                        </div>
                        <div className="clients_list_padding">
                            <div className="flex flex-wrap flex-row gap-2 justify-between">
                                <div className="border_ice_courier_mobile client-item-mobile"></div>
                                <div className="border_insight_consulting_mobile client-item-mobile"></div>
                                <div className="border_kad_construction_mobile client-item-mobile"></div>
                                <div className="border_vd_mobile client-item-mobile"></div>
                                <div className="border_aruvadai_mobile client-item-mobile"></div>
                                <div className="border_saadhaga_paravaigal_mobile client-item-mobile"></div>
                                <div className="border_glimmerwood_mobile client-item-mobile"></div>
                                <div className="border_anandan_digital_mobile client-item-mobile"></div>
                                <div className="border_suryamithran_mobile client-item-mobile"></div>
                                <div className="border_unidesigns_mobile client-item-mobile"></div>
                                <div className="border_musictube_mobile client-item-mobile"></div>
                                <div className="border_shortflix_mobile client-item-mobile"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 