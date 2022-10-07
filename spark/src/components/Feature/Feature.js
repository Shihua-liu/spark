
import "./Feature.css"

const Feature = (props) => {

    let cardImage = <img src={"/images/" + props.image} alt=""/>

    if(props.image === undefined){
        cardImage = <img src={"/images/diamonds2.jpg"} alt=""/>;
    }

    return (
        <section className="feature">
            <figure className="feature__figure">
                {cardImage}
            </figure>
            <h2 className="feature__head">
                {props.head || "naam sieraad"}
            </h2>
            <section className="feature__div">
                <p>{props.text || "dummy text"}</p>
            </section>
        </section>
    );
}
 
export default Feature;