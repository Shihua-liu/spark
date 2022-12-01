import { useState, useEffect } from "react"

import CollectionInfo from "./CollectionCards/CollectionInfo";
import CollectionCard from "./CollectionInfo/CollectionCards";

import CardInfo from "./CollectionData"


import "./Collection.css"

const Collection = () => {

    const [productCards, setproductCards] = useState(CardInfo);

    let onButtonClicked = () =>{
        console.log("click")
    }

    return (
        <article className="collection">
            <CollectionInfo />
            <CollectionCard onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
        </article>
    );
}

export default Collection;
