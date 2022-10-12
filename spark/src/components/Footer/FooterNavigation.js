import FooterNAV from "./Footercomponents/FooterNav";
import "./Footer.css"
import FooterStart from "./Footercomponents/Footerstart";
import FooterSocial from "./Footercomponents/FooterSocial"

const FooterNav = () => {
    return ( 
        <footer className="Footer">
            <FooterNAV />
            <FooterStart />
            <FooterSocial />
        </footer>
        
     );
}
 
export default FooterNav;