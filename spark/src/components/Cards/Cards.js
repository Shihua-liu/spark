import "./Cards.css"

const Cards = (props) => {
    let cardImage = <img src={"/images/" + props.image} alt=""/>

    if(props.image === undefined){
        cardImage = <img src={"/images/dubbel-ringen.jpg"} alt=""/>;
    }

    return(
        <article className="card">
            
            <figure className="card__figure">
                {cardImage}
            </figure>
            <h2 className="card__head">
                {props.head || "naam sieraad"}
            </h2>
            <section className="card__div">
                <p>{props.text || "dummy text"}</p>
            </section>
            <section>
                <p>{props.prijs || "prijs"}</p>
            </section>
        </article>
    );
}
 
export default Cards;