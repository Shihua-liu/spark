import "./Navigation.css"

const NavLinks = () =>{
    return(
            <ul className="NavBar">
                <i className="fa-solid fa-gem"></i>
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">over</a>
                </li>
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">features</a>
                </li>
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">prijs</a>
                </li>
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">contact</a> 
                </li>
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">login</a>
                </li>
            </ul>
    )
}

export default NavLinks