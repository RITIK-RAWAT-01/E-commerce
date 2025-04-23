import React, { useContext } from "react";
import { Shop_Context } from "../context/Shop_Context";
import { RxCross1 } from "react-icons/rx";
import './Cartitem.css'

function Cartitem(){

    const {getTotalCardAmount , all_product , cardItem , RemoveToCard} = useContext(Shop_Context)

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if(cardItem[e.id] > 0){

                    return <div>
                        <div className="cartitems-formet cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitem-quantity">{cardItem[e.id]}</button>
                            <p>${e.new_price*cardItem[e.id]}</p>
                            <div onClick={() => {RemoveToCard(e.id)}}><RxCross1 /></div>
                        </div>
                        <hr/>
                    </div>
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCardAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCardAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitem