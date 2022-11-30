import "./Navigation.css"

import React from "react"
import { Link } from "react-router-dom"
const NavLinks = () => {
    return (

        <ul className="NavBar">
            <i className="fa-solid fa-gem"></i>

            <li className="NavBar__list">
                <a className="NavBar__list--links" href="">Over ons</a>
            </li>


            <li className="NavBar__list">
                <a className="NavBar__list--links" href="">Features</a>
            </li>
            <li className="NavBar__list">
                <a className="NavBar__list--links" href="">Prijs</a>
            </li>
            <li className="NavBar__list">
                <a className="NavBar__list--links" href="">Contact</a>
            </li>
            <Link to="/login">
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">Login</a>
                </li>
            </Link>



        </ul>


    )
}

export default NavLinks