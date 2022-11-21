
import Checks from "./Checks/Checks";
import BigPicture from "./bigPicture/bigPicture";
import AboutPart from "./About/About"
import Feature from "./Feature/Feature"
import Sectionfirst from "./Sectionfirst/Section"
import Sectionsecond from "./Sectionsecond/Section"
import Cardtext from "./Cards/Cards-text"
import Cards from "./Cards/Cards"
import CardsHeaderEnButton from "./Cards/CardsHeaderEnButton"
import Contact from "./contact/contact"

import { BiSupport } from "react-icons/bi"
import { TbTruckReturn } from "react-icons/tb"

import { MdHighQuality } from "react-icons/md"


const firstpage = () => {

    return (
        <>
            <Checks />
            <BigPicture />
            <AboutPart />
            <Sectionfirst BigTitleSection="Features">
                <Feature iconimage={<TbTruckReturn  />} head="Cash Back" text={<p>Niet blij? <br></br>krijg je geld terug</p>}/>
                <Feature iconimage={<BiSupport />} head="Support" text={ <p>Hulp nodig? <br></br>Neem contact op <br /> met onze 24/7 service</p>}/>
                <Feature iconimage={<MdHighQuality />} head="Hoge Kwaliteit" text={<p>Wij maken gebruiken <br /> het beste kwaliteit dat er is</p>}/>
            </Sectionfirst>
            <Sectionsecond BigTitleSection="Prices">
                <Cardtext />
                <section className="card__section--cards">
                    <Cards CardsHeaderEnButton={CardsHeaderEnButton} />
                </section>
            </Sectionsecond>
            <Contact head="Contact" />
        </>

    );
}

export default firstpage;