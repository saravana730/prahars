'use client';
import React from 'react';
import '../styles/styles.css';


export default function Clients(){
    return (
        <div className="clients_top_padding">
            <div className="pt-16 clients">
            <div className='flex items-center justify-center'>
                <div className="clientsTitle1">Our Happy <span className="clientsTitle2">Customers</span></div>
            </div>
            <div className="clients_empty_box"></div>
            {/* <div className='separator mt-12 mb-10'></div> */}
            <div className="clients_page">
                <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="border_ice_courier"></div>
                            <div className="border_insight_consulting"></div>
                            <div className="border_kad_construction"></div>
                            <div className="border_vd"></div>
                        </div>
                        <div className="client_empty_box"></div>
                        <div className="flex flex-row justify-between">
                            <div className="border_aruvadai"></div>
                            <div className="border_saadhaga_paravaigal"></div>
                            <div className="border_glimmerwood"></div>
                            <div className="border_anandan_digital"></div>
                        </div>
                        <div className="client_empty_box"></div>
                        <div className="flex flex-row justify-between">
                            <div className="border_suryamithran"></div>
                            <div className="border_unidesigns"></div>
                            <div className="border_musictube"></div>
                            <div className="border_shortflix"></div>
                        </div>
                     </div>
                
            </div>
        </div>
        </div>
    )
} 