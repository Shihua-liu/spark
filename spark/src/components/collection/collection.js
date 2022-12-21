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
    const [cardClicked, setcardClicked] = useState({});


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

    const editButtonClicked = (nameInput, descInput, priceInput) => {
        let productCard = productCards

        let newState = productCard.map(product => {
            if (cardClicked.id === product.id) {
                product.name = nameInput
                product.description = descInput
                product.price = priceInput
                return product
            } 
            return product
        });
        setproductCards(newState)
        setopen(true)
    }

    const onCardClicked = (idFromCard) => {
        if (productCards[idFromCard - 1].name === "Placeholder") {
            setedit(false);
        }
        else {
            setedit(true);
        }
        setopen(!open);
        setcardClicked(productCards[idFromCard - 1])
    }

    const onButtonClicked = () => {
        setopen(!open)
    }

    if (open === true) {
        return (
            <article className="collection">
                <CollectionCard onProductCardClicked={onCardClicked} onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        );
    }
    else {
        return (
            <article className="collection">
                <Popup editButtonClicked={editButtonClicked} edit={edit} addButtonClicked={addButtonClicked} cardClicked={cardClicked} />
                <CollectionCard onProductCardClicked={onCardClicked} onButtonClicked={onButtonClicked} productCards={productCards} headerText="Mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
            </article>
        )
    }
}

export default Collection;
