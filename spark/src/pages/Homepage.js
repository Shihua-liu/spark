import NavBar from "../components/navigation/NavBar"
import Checks from "../components/Checks/Checks";
import BigPicture from "../components/bigPicture/bigPicture";
import AboutPart from "../components/About/About"
import Feature from "../components/Feature/Feature"
import Section from "../components/Section/Section"
import Cards from "../components/Cards/Cards"
import Contact from "../components/contact/contact"

const Homepage = () => {
    return (
        <>
            <NavBar />
            <Checks />
            <BigPicture />
            <AboutPart />
            <Section BigTitleSection="Features">
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
            </Section>
            <Section BigTitleSection="Prices">
                <Cards head="prijs" text="hahah" prijs="29,95" />
                <Cards head="prijs" text="hahah" prijs="29,95" />
                <Cards head="prijs" text="hahah" prijs="29,95" />
            </Section>
            <Contact head="Contact"/>
        </>

    );
}

export default Homepage;