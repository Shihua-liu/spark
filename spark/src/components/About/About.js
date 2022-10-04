import "./About.css"


const About = () => {
    return ( 
        <section className="about">
            <section className="about__header">
                <h2 className="about__header--titel">About Spark</h2>        
                <p className="about__header--tekst">Spark is een online webshop dat sieraden verkoopt het beste kwaliteit. Zilver, goud, titanium en diamanten! <br /><br /> Bestel het voor 22:00 uur en krijg het morgen in huis</p>
            </section>
            <img src="/images/dubbel-ringen.jpg" alt="2 ringen op elkaar" />
        </section>
     );
}
 
export default About;