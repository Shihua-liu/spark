import "./Footer.css"

const FooterLinks = () => {
    return (
        <ul className="Footer">
            {/* <i className="fa-solid fa-gem"></i> */}
            <li className="Footer__list">
                <a className="Footer__list--links" href="">over</a>
            </li>
            <li className="Footer__list">
                <a className="Footer__list--links" href="">features</a>
            </li>
            <li className="Footer__list">
                <a className="Footer__list--links" href="">prijs</a>
            </li>
            <li className="Footer__list">
                <a className="Footer__list--links" href="">contact</a>
            </li>
            <li className="Footer__list">
                <a className="Footer__list--links" href="">login</a>
            </li>
        </ul>);
}

export default FooterLinks;