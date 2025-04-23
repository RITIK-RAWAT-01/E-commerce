import React, {createContext, useState } from "react";
import all_product from "../assets/All_Category";

export const Shop_Context = createContext(null)

const getDefaultCard = () => {
    let card = {}
    for (let index = 0; index < all_product.length; index++) {
        card[index] = 0;
    }

    return card
}

const Shop_Context_Provider = (props) => {
    
    const [cardItem , setCardItem] = useState(getDefaultCard())
    
    const AddToCard = (itemID) => {
        setCardItem((prev) => ({...prev , [itemID] : prev[itemID] + 1}))
        console.log(cardItem)
    }

    const RemoveToCard = (itemID) => {
        setCardItem((prev) => ({...prev , [itemID] : prev[itemID] - 1}))
    }

    const getTotalCardAmount = () => {
        let totalAmount = 0
        for (const item in cardItem) {
            if(cardItem[item] > 0){
                let itemInfo = all_product.find((product) => product.id == Number(item))
                totalAmount += itemInfo.new_price * cardItem[item]
            }

            return totalAmount;
        }
    }

    const getTotalCardItems = () => {
        let totalItem = 0

        for(const item in cardItem){
            if(cardItem[item] > 0){
                totalItem += cardItem[item]
            }
        }

        return totalItem
    }


    let ContextFolder = {getTotalCardItems , getTotalCardAmount , all_product , cardItem , AddToCard , RemoveToCard}
    
    return(
        <Shop_Context.Provider value={ContextFolder}>
            {props.children}
        </Shop_Context.Provider>
    )
}

export default Shop_Context_Provider