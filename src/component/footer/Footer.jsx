import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { images } from "../assets/Assets";

function Footer(){


    return(
        <div className="footer">
            <div className="footer-items">
                <div className="f-logo">
                    <img src={images.Logo} alt="" />
                    <h1>SHOPPER</h1>
                </div>
                <ul className="f-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="f-apps">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <div className="line"></div>
                <div className="copyright">
                    <p>Copyright <span>&#64;</span> 2024 - All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer