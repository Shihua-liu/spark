
import Checks from "./Checks/Checks";
import BigPicture from "./bigPicture/bigPicture";
import AboutPart from "./About/About"
import Feature from "./Feature/Feature"
import Sectionfirst from "./Sectionfirst/Section"
import Sectionsecond from "./Sectionsecond/Section"
import Cardtext from "./Cards/Cards-text"
import Cards from "./Cards/Cards"
import Contact from "./contact/contact"

const firstpage = () => {
    return (
        <>
            <Checks />
            <BigPicture />
            <AboutPart />
            <Sectionfirst BigTitleSection="Features">
                <Feature />
            </Sectionfirst>
            <Sectionsecond BigTitleSection="Prices">
                <Cardtext />
                <section className="card__section--cards">
                    <Cards head="Word lid!" prijs="€9,95 per maand" />
                </section>

            </Sectionsecond>
            <Contact head="Contact" />
        </>

    );
}

export default firstpage;