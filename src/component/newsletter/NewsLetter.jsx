import React from "react";
import './NewsLetter.css'

function NewsLetter(){


    return(
        <div className="newsletter">
            <div className="letter">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newletter and stay update.</p>
                <div className="letter_Submit">
                    <input type="text" placeholder="Your Email id"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter