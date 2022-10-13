import "../Footer.css"

const FooterNav = () => {
    return (
        <ul className="Footer__ul">
            {/* <i className="fa-solid fa-gem"></i> */}
            <h3 className="Footer__h3">Navigatie</h3>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Over</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Features</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Prijs</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Contact</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Login</a>
            </li>
        </ul>
    );
}

export default FooterNav;