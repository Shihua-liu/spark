import { useState, useEffect } from 'react';

import "./Popup.css"
import "../Collection.css"
import "../CollectionInfo/CollectionInfo.css"
import "../CollectionCards/CollectionCards.css"

const Popup = (props) => {

    const [nameInput, setnameInput] = useState("")
    const [descInput, setdescInput] = useState("")
    const [priceInput, setpriceInput] = useState("")

    const eventNameInput = (event) => {
        setnameInput(event.target.value)
    }

    const eventDescInput = (event) => {
        setdescInput(event.target.value)
    }

    const eventPriceInput = (event) => {
        setpriceInput(event.target.value)
    }

    useEffect(() => {
        setnameInput(props.cardClicked.name)
        setdescInput(props.cardClicked.description)
        setpriceInput(props.cardClicked.price)
    }, []);


    const addProducts = () => {
        if (nameInput !== "") {
            props.addButtonClicked(nameInput, descInput, priceInput)
        }
    }

    const editProducts = () => {
        props.editButtonClicked(nameInput, descInput, priceInput)
    }

    let button = <button onClick={addProducts} className="popup__button">Voeg toe</button>
    if (props.edit === true) {
        button = <button onClick={editProducts} className="popup__button">edit</button>
    }

    return (
        <article className="popup">
            <header className="popup__heading">
                <h2 className="popup__header">Product Toevoegen</h2>
            </header>
            <div className="popup__wrapper">
                <div className="popup__dubblewrapper">
                    <label htmlFor="" className="popup__label">Naam van Product:</label>
                    <input type="text" className="popup__input" id="name" onChange={eventNameInput} value={nameInput} />
                </div>

                <div className="popup__dubblewrapper">
                    <label htmlFor="" className="popup__label">Omschrijving van Product:</label>
                    <input type="text" className="popup__input" id="description" onChange={eventDescInput} value={descInput} />
                </div>

                <div className="popup__dubblewrapper">
                    <label htmlFor="" className="popup__label">Prijs van Product:</label>
                    <input type="text" className="popup__input" id="price" onChange={eventPriceInput} value={priceInput} />
                </div>

            </div>
           {button}
        </article>
    );
}

export default Popup;