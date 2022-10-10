import NavBar from "../components/navigation/NavBar"
import Checks from "../components/Checks/Checks";
import BigPicture from "../components/bigPicture/bigPicture";
import AboutPart from "../components/About/About"
import Feature from "../components/Feature/Feature"
import Sectionfirst from "../components/Sectionfirst/Section"
import Sectionsecond from "../components/Sectionsecond/Section"
import Cards from "../components/Cards/Cards"
import Contact from "../components/contact/contact"
import Footer from "../components/Footer/Footer";

const Homepage = () => {
    return (
        <>
            <NavBar />
            <Checks />
            <BigPicture />
            <AboutPart />
            <Sectionfirst BigTitleSection="Features">
                <Feature />
            </Sectionfirst>
            <Sectionsecond BigTitleSection="Prices">
                <Cards head="prijs" text="hahah" prijs="29,95" />
                <Cards head="prijs" text="hahah" prijs="29,95" />
                <Cards head="prijs" text="hahah" prijs="29,95" />
            </Sectionsecond>
            <Contact head="Contact"/>
            <Footer />
        </>

    );
}

export default Homepage;