import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation";

import "./Navigation.css";

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <Navigation />
            <MobileNavigation />
        </div>
     );
}
 
export default NavBar;