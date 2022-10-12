import"../Footer.css"

const FooterSocial = () => {
    return ( 
        <ul className="Footer__ul">
            {/* <i className="fa-solid fa-gem"></i> */}
            <h3 className="Footer__h3">Volg Storytel</h3>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Blog</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Facebook</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Instagram</a>
            </li>
            <li className="Footer__list--nav">
                <a className="Footer__list--links" href="">Youtube</a>
            </li>
        </ul>
     );
}
 
export default FooterSocial;