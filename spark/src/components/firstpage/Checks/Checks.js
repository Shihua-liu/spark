import {FiCheckSquare} from "react-icons/fi"

import "./Checks.css"

const Checks = () => {
    return ( 
        <ul className="checks">
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">buy before 10pm for next day home</li>
            </span>
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">guaranteed money back</li>
            </span>
            <span>
                <FiCheckSquare className="checks__icons" size="2rem" color="#48001e"/>
                <li className="checks__items">high quality</li>
            </span>
            
        </ul>
     );
}
 
export default Checks;