import { useState, useEffect } from 'react';

import "./CollectionInfo.css"

const CollectionInfo = (props) => {
    return (
        <section className="collection__info">
            <header className="header">
                <h1 className="heading">Het product</h1>
            </header>
            <div className="informatie">
                <img className="informatie__Img" src="/images/Diamonds.jpg" alt="" />
                <h2 className="informatie__product">Title</h2>
                <h2 className="informatie__product">Omschrijving</h2>
                <h2 className="informatie__product">Prijs</h2>
                <h2 className="informatie__product">Isnfo</h2>
            </div>
        </section>
    );
}

export default CollectionInfo;