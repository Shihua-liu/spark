// import { useState, useEffect } from 'react';



import "./CollectionCards.css"

const CollectionCard = (props) => {

    let addProduct = () => {
        props.onButtonClicked();
    }

    let productCardsToBeRendered = props.productCards.CardInfo.map(product => {
        if (product.name === "Placeholder") {
            return (
                <li className="productList__item">
                    <button onClick={addProduct} className="productList__button">{props.buttonSymbol || "*"}</button>
                    <p className="productList__text">{props.buttonText || "Toevoegen"} </p>
                </li>
            )
        }
        return (
            <li className="productList__item">
                <img className="productList__img" src={product.img} alt="" />
                <p className="productList__imgText">{product.name}</p>
            </li>
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
