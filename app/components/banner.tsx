'use client';
import React from 'react';
import '../styles/styles.css';

export default function Banner(){
    return(
        <div id="Home">
            <div className= "banner">
                <div className="bannercontents">
                    Relevant digital lead <br />
                    generation made<br />
                    <p className="Simple"></p>
                    <div className="subtitle">
                        <p>forging your <span style={{color:"#df0070"}}>winning</span> digital presence</p>
                    </div>
                </div>
            </div>
            <div className= "mobileBanner">
                <div className="bannercontents">
                    Relevant digital lead 
                    generation made<br />
                    <p className="Simple"></p>
                    <div className="subtitle">
                        <p>forging your <span style={{color:"#df0070"}}>winning</span> digital presence</p>
                    </div>
                </div>
            </div>

        </div>
    )
}