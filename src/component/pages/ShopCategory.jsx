import React, { useContext } from "react";
import { Shop_Context } from "../context/Shop_Context";
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from "../item/Item";
import './CSS/ShopCategory.css'

function ShopCategory(props){

    const {all_product} = useContext(Shop_Context)

    return(
        <div className="boy">
            <div className="Banner_Img">
                <img src={props.banner} alt="" />
                <div className="shopcategory-indexSort">
                    <p>
                        <span>Showing 1 to 12</span> out of 36 products
                    </p>
                    <div className="shopcategory-sort">
                        Sort by <img src={dropdown_icon} alt="" />
                    </div>
                </div>
                <div className="shopcategory-products">
                    {all_product.map((item , id) => {
                        if(props.category == item.category){
                           return <Item key={id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
                        }else{
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className="All_product_explore">
                <button>Explore More</button>
            </div>
        </div>
    )
}

export default ShopCategory