import "./Cards.css"
import { FiCheckSquare } from "react-icons/fi"
import React from "react"
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           text: [ "Geen verzend kosten", "Altijd opzegbaar", ],
        }
    }
    

    render() {

        let texts = this.state.text.map(text =>  {
            return( 
            <section className="card__div">
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                <p>{text}</p>
            </section>
        )});


        return (
            
                <article className="card">
                    <section className="card__section">
                        <h2 className="card__head">

                            {this.props.head || "naam sieraad"}
                        </h2>
                        <section>
                          {texts}  
                        </section>
                        
                        
                        <section>
                            <p>{this.props.prijs || "prijs"}</p>
                        </section>
                        <button className="card__button">Probeer 1 maand gratis</button>
                    </section>
                </article>
            
        );
    }


}

export default Cards;