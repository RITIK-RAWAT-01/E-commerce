import React from "react";
import './Offers.css'
import { images } from "../assets/Assets";

function Offers(){


    return(
        <div className="offer">
            <div className="offers">
                <div className="offer-left">
                    <h1>Exclusive Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <div className="offer-button">
                        <button>Check now</button>
                    </div>
                </div>
                <div className="offer-right">
                    <img src={images.OfferImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers