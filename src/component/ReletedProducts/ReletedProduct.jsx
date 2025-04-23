import React from "react";
import './ReletedProduct.css'
import Item from "../item/Item";
import data_product from "../assets/data";
function ReletedProduct(){

    return(
        <>
            <div className="product">
                <h1>Releted Products</h1>
                <hr/>
                <div className="products">
                    {data_product.map((item , i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ReletedProduct