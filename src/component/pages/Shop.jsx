import React from "react";
import Hero from "../hero/Hero";
import Product from "../product/Product";
import Offers from "../Offers/Offers";
import NewCollection from "../newcollection/NewCollection";
import NewsLetter from "../newsletter/NewsLetter";

function Shop(){

    return(
        <div>
            <Hero/>
            <Product/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop