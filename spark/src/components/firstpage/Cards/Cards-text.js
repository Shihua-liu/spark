import "./Cards.css"
import { FiCheckSquare } from "react-icons/fi"

const Cardtext = () => {
    return (
        <section className="card__tekst">
            <h2 className="card__tekst--h2">Kies je abonnement:</h2>
            <span className="card__text--span">
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                <p>Meer dan 100 exclusieve sieraden</p>
            </span>
            <span className="card__text--span">
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                <p>10% korting</p>
            </span>
            <span className="card__text--span">
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e" />
                <p>Gratis bezorgen</p>
            </span>
        </section>
    );
}

export default Cardtext;