'use client';
import React from 'react';
import '../styles/styles.css';

export default function Banner(){
    return(
        <div className= "banner">
            <p className="bannercontents">
                Relevant digital lead <br />
                generation made<br />
                <p className="Simple">Simple</p>
                <div className="subtitle">
                    <p>forging your <span style={{color:"#df0070"}}>winning</span> digital presence</p>
                </div>
            </p>
        </div>
    )
}