import React from "react";
import './Breadcrums.css'
import breadcrum_arrow from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

    const {product} = props

    return(
        <div className="bureadcrumroute">
            <div className="breadcrum">
                HOME <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name}
            </div>
        </div>
    )
}

export default Breadcrum