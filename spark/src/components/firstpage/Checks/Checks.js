import {FiCheckSquare} from "react-icons/fi"

import "./Checks.css"

const Checks = () => {
    return ( 
        <ul className="checks">
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">Koop voor 22:00, en dan morgen in huis</li>
            </span>
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">Gegarandeerd geld terug</li>
            </span>
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">Beste kwaliteit</li>
            </span>
            
        </ul>
     );
}
 
export default Checks;