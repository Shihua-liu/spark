
import "./Feature.css"
import { TbTruckReturn } from "react-icons/tb"

const Feature = () => {

    return (
        <div className="feature__maindiv">
            <section className="feature">
                <figure className="feature__figure">
                    <TbTruckReturn />
                </figure>
                <h2 className="feature__head">
                    Cash Back
                </h2>
                <section className="feature__div">
                    <p>Niet blij? <br></br>krijg je geld terug</p>
                </section>
            </section>
            <section className="feature">
                <figure className="feature__figure">
                    <TbTruckReturn />
                </figure>
                <h2 className="feature__head">
                    Support
                </h2>
                <section className="feature__div">
                    <p>Hulp nodig? <br></br>Neem contact op <br /> met onze 24/7 service</p>
                </section>
            </section>
            <section className="feature">
                <figure className="feature__figure">
                    <TbTruckReturn />
                </figure>
                <h2 className="feature__head">
                    Cash Back
                </h2>
                <section className="feature__div">
                    <p>Niet blij? krijg je geld terug</p>
                </section>
            </section>
        </div>

    );
}

export default Feature;