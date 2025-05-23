import React, { useCallback, useEffect, useState } from "react";
import './NewCollection.css'
import New_Collection from "../assets/newcollection";
import Item from '../item/Item'
import all_product from "../assets/All_Category";

function NewCollection(){

    const [newCollection , setNewCollection] = useState([])

    useEffect(() => {
        setNewCollection(all_product.slice(0,8))
    },[])

    return(
        <div className="newcollection">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collection">
                {newCollection.map((item , i)=> {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollection