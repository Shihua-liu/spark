import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import "./CollectionCards.css"

const CollectionCard = (props) => {

    let addProduct = () => {
        props.onButtonClicked();
    }

    let onCardClicked = (idFromCard) => {
        console.log("clicked!" + idFromCard)
    }

    let productCardsToBeRendered = props.productCards.map(product => {
        if (product.name === "Placeholder") {

            return (
                <li key={product.id} className="productList__item" >
                    <button onClick={addProduct} className="productList__button">{props.buttonSymbol || "*"}</button>
                    <p className="productList__text">{props.buttonText || "Toevoegen"} </p>
                </li>
            )

        }

        return(
            <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img}/>
        )
    })


    return (
        <section className="collection__cards">
            <header className="header">
                <h1 className="heading">{props.headerText || "PlaceHolder"}</h1>
            </header>
            <ul className="productList">
                {productCardsToBeRendered}
            </ul>
        </section>

    );
}

export default CollectionCard;
