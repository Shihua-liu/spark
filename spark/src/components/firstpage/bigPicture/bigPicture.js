import "./bigPicture.css"

const bigPicture = () => {
    return ( 
        <section className="landing">
                <div className="landing__text">
                    <h1 className="landing__head">Altijd een stuk sieraad voor jouw!</h1>
                    <p className="landing__tekst">Duizenden stukken sieraden in onze assortiment waar u uit kunt kiezen.</p>
                    <br />
                    <p className="landing__tekst">Niet tevreden? Maak dan gebruikt van onze 30 dagen retour regel.</p>
                    <button className="landing__btn">login</button>
                </div>
                <div className="bigPicture">
                    <img className="bigPicture__image" src="/images/rings-background-image.jpg" alt="" />
                </div>
        </section>


    );
}
 
export default bigPicture;