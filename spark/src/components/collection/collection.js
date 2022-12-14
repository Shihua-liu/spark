import { useState, useEffect } from "react"

import CollectionInfo from "./CollectionInfo/CollectionInfo";
import CollectionCard from "./CollectionCards/CollectionCards";
import Popup from "./Popup/Popup";

import CardInfo from "./CollectionData"

import ChooseImage from "./ChooseImage";

import "./Collection.css"

const Collection = () => {

    const [productCards, setproductCards] = useState(CardInfo);
    const [open, setopen] = useState(true)
    const [edit, setedit] = useState(false)

    const addButtonClicked = (nameInput, descInput, priceInput) => {

        let imageFromHelper = ChooseImage(nameInput)

        let toBeAdded = {
            id: productCards.length + 1,
            name: nameInput,
            description: descInput,
            price: priceInput,
            img: imageFromHelper,
        }

        let shallowCopy = [...productCards]

        shallowCopy.push(toBeAdded);

        setopen(!open);
        setproductCards(shallowCopy,);
    }

    const onCardClicked = () =>{
        setopen(!open);
    }

    const onButtonClicked = () => {
        setopen(!open)
    }

    if (open === true) {
        return (
            <article className="collection">
                <CollectionInfo />
                <CollectionCard onCardClicked={onCardClicked} onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        );
    }
    else {
        return (
            <article className="collection">
                <Popup addButtonClicked={addButtonClicked} />
                <CollectionCard onCardClicked={onCardClicked} onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        )
    }
}

export default Collection;
