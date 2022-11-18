import "./Navigation.css"

import React from "react"
import { Link } from "react-router-dom"
const NavLinks = () => {
    return (

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
            <Link to="/login">
                <li className="NavBar__list">
                    <a className="NavBar__list--links" href="">login</a>
                </li>
            </Link>



        </ul>


    )
}

export default NavLinks