import React, { useContext } from "react";
import { Shop_Context } from "../context/Shop_Context";
import Cartitem from "../Cartitem/Cartitem";

function Cart(){


    return(
        <div>
            <Cartitem/>
        </div>
    )
}

export default Cart