import { useState, useEffect } from "react"

import CollectionInfo from "./CollectionInfo/CollectionInfo";
import CollectionCard from "./CollectionCards/CollectionCards";
import Popup from "./Popup/Popup";

import CardInfo from "./CollectionData"

import zilverRing from "./img/Zilver-ring.jpeg";
import goudKetting from "./img/goud-ketting.webp";
import dollarKetting from "./img/dollar-necklace.jpg";
import Ruby from "./img/Ruby.jpg"

import "./Collection.css"

const Collection = () => {

    const [productCards, setproductCards] = useState(CardInfo);
    const [open, setopen] = useState(true)

    const addButtonClicked = (nameInput, descInput, priceInput) => {


        let toBeAddedImg;
        switch (nameInput) {
            case ("Slot Ketting"):
                toBeAddedImg = goudKetting
                break;
            case ("Dollar Ketting"):
                toBeAddedImg = dollarKetting
                break;
            case ("Zilver ring"):
                toBeAddedImg = zilverRing
                break;
            default:
                toBeAddedImg = Ruby
                break;
        }

        console.log(nameInput)
        console.log(descInput)
        console.log(priceInput)

        let toBeAdded =
        {
            name: nameInput,
            // description: descInput,
            // priceInput: priceInput,
            img: toBeAddedImg,
        }

        let shallowCopy = [...productCards]

        shallowCopy.push(toBeAdded);

        setopen(!open);
        setproductCards(shallowCopy,);
    }

    const onButtonClicked = () => {
        setopen(!open)
    }

    if (open === true) {
        return (
            <article className="collection">
                <CollectionInfo />
                <CollectionCard onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        );
    }
    else {
        return (
            <article className="collection">
                <Popup addButtonClicked={addButtonClicked} />
                <CollectionCard onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        )
    }
}

export default Collection;
