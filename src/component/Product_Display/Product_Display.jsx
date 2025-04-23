import React, { useContext } from "react";
import './ProductDisplay.css'
import star_dull_icon from '../assets/star_dull_icon.png'
import star_icon from '../assets/star_icon.png'
import { Shop_Context } from "../context/Shop_Context";

function Product_Display(props){

    const {AddToCard} = useContext(Shop_Context)
    const {Product} = props

    return(
        <>
            <div className="Product-Display">
                <div className="productdisplay">
                    <div className="productdisplay-left">
                        <div className="productdisplay-left-img-list">
                            <img src={Product.image} alt="" />
                            <img src={Product.image} alt="" />
                            <img src={Product.image} alt="" />
                            <img src={Product.image} alt="" />
                        </div>
                        <div className="productdisplay-left-img">
                            <img src={Product.image} alt="" />
                        </div>
                    </div>

                    <div className="productdisplay-right">
                        <h1>{Product.name}</h1>
                        <div className="productdisplay-right-star">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                            <p>(122)</p>
                        </div>
                        <div className="productdisplay-right-prices">
                            <div className="productdisplay-right-price-old">${Product.old_price}</div>
                            <div className="productdisplay-right-price-new">${Product.new_price}</div>
                        </div>
                        <div className="productdisplay-right-description">
                            <p>A lightweight,usually knitted,pullover shirt,close-fitting and with a round neckline ans short sleever,worn as an undershirt or outer garment.</p>
                        </div>
                        <div className="productdisplay-right-size">
                            <h1>Select Size</h1>
                            <div className="productdisplay-right-sizes">
                                <div className="Product-sizes">S</div>
                                <div className="Product-sizes">M</div>
                                <div className="Product-sizes">L</div>
                                <div className="Product-sizes">XL</div>
                                <div className="Product-sizes">XXL</div>
                            </div>
                        </div>
                        <button className="CARD-right" onClick={() => {AddToCard(Product.id)}}>ADD TO CARD</button>
                        <p className="product-display-right-category"><span>Category :</span>Women,T-Shirt,Crop Top</p>
                        <p className="product-display-right-category"><span>Tags :</span>Modern,Latest</p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Product_Display