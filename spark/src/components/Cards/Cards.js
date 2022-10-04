import "./Cards.js"

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
            <section className="card__div">
                <p>{props.text || "dummy text"}</p>
            </section>
        </article>
    );
}
 
export default Cards;