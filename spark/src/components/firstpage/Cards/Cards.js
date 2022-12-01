import "./Cards.css"
import { FiCheckSquare } from "react-icons/fi"
import React from "react"

const Cards = (props) => {

    let Cards = props.CardsHeaderEnButton.CardsHeaderEnButton.map((inhoud) => {

        if (inhoud.type == true) {
            return (
                <article className="card card__special" key={inhoud.id}>
                    <div className="card__section">
                        <h2 className="card__header">{inhoud.Header}</h2>
                            {inhoud.text &&
                                <>
                                    {
                                        (() => {
                                            const arr = [];
                                            for (let i = 0; i < inhoud.text.length; i++) {
                                                arr.push(
                                                    <div className="card__div" >
                                                        <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                                                        <p>{inhoud.text[i]}</p>
                                                    </div>
                                                );
                                            }
                                            return arr;
                                        })()
                                    }
                                </>
                            }
                    </div>
                    <button className="card__button">{inhoud.button}</button>
                </article>
            )
        }
        
        else {
            return (
                <article className="card" key={inhoud.id}>
                    <div className="card__section">
                        <h2 className="card__header">{inhoud.Header}</h2>

                        {inhoud.text &&
                            <>
                                {
                                    (() => {
                                        const arr = [];
                                        for (let i = 0; i < inhoud.text.length; i++) {
                                            arr.push(
                                                <div className="card__div" >
                                                    <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                                                    <p>{inhoud.text[i]}</p>
                                                </div>
                                            );
                                        }
                                        return arr;
                                    })()
                                }
                            </>
                        }
                    </div>
                    <button className="card__button">{inhoud.button}</button>
                </article>
            )
        }

    })


    return (
        <>
            {Cards}
        </>
    );

}



export default Cards;