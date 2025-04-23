import React, { useContext } from "react";
import { Shop_Context } from "../context/Shop_Context";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import Product_Display from "../Product_Display/Product_Display";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import ReletedProduct from "../ReletedProducts/ReletedProduct";


function Product(){

    const {all_product} = useContext(Shop_Context)
    const {productId} = useParams()
    console.log(productId)

    const product = all_product.find((e) => e.id == Number(productId));
    
    return(
        <div>
            <Breadcrum product={product}/>
            <Product_Display Product={product}/>
            <DescriptionBox/>
            <ReletedProduct/>
        </div>
    )
}

export default Product