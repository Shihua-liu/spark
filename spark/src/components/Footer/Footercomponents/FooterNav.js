import "../Footer.css"

const FooterNav = () => {
    return (
        <ul className="Footer__ul">
            {/* <i className="fa-solid fa-gem"></i> */}
            <h3 className="Footer__h3">navigatie</h3>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">over</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">features</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">prijs</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">contact</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">login</a>
            </li>
        </ul>
    );
}

export default FooterNav;