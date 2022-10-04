import NavBar from "../components/navigation/NavBar"
import Checks from "../components/Checks/Checks";
import BigPicture from "../components/bigPicture/bigPicture";
import AboutPart from "../components/About/About"
import Section from "../components/Section/Section"
import Cards from "../components/Cards/Cards"

const Homepage = () =>{
    return(
        <>
            <NavBar />
            <Checks />
            <BigPicture />
            <AboutPart />
            <Section BigTitleSection="Featuring">
                <Cards head="Feature" text="hahah"/>
                <Cards head="Feature" text="hahah"/>
                <Cards head="Feature" text="hahah"/>
            </Section>
            
        </>
        
    );
}

export default Homepage;