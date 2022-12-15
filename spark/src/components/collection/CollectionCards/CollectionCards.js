import { useState, useEffect } from 'react';
import Placeholder from '../Placeholder/Placeholder';
import ProductCard from '../ProductCard/ProductCard';

import "./CollectionCards.css"

const CollectionCard = (props) => {

    let addProduct = () => {
        props.onButtonClicked();
    }

    let onCardClicked = (idFromCard) => {
        props.onProductCardClicked(idFromCard)
    }

    let productCardsToBeRendered = props.productCards.map(product => {
        if (product.name === "Placeholder") {

            return (
                <Placeholder cardClicked={addProduct} onCardClicked={onCardClicked} id={product.id} buttonSymbol={props.buttonSymbol} buttonText={props.buttonText}/>
            )

        }
        return(
        
            <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} description={product.description} price={product.price}productImg={product.img}/>
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
