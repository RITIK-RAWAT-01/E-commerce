import React from "react";
import './Hero.css'
import { images } from "../assets/Assets";

function Hero(){

    return(
        <div className="hero">
            <div className="main">
                <div className="hero-left">
                    <p>NEW ARRIVALS ONLY</p>
                    <div className="hand-logo">
                        <h1>new</h1>
                        <img src={images.Slap} alt="" />
                    </div>
                    <h1>collections for everyone</h1>
                    <div className="errow">
                        <button>Latest Collection<img src={images.Arrow} alt="" /></button>
                    </div>
                </div>

                <div className="hero-right">
                    <img src={images.Heroen} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero