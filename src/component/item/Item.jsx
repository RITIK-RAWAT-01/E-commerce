import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

function Item(props){

    

    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link>
            <p>{props.name}</p>
            <div className="price_item">
                <div className="new_price">
                    <span>{`$${props.new_price}`}</span>
                </div>
                <div className="old_price">
                    <span id="old_price">{`$${props.old_price}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Item