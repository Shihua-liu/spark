import NavLinks from "./NavLinks"
import Hamburger from "./Navigation.css"
import React, { useState } from 'react';

import "./Navigation.css"

import {AiOutlineCloseCircle} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

const MobileNavigation = () =>{

    const [open, setOpen] = useState(false);

    const hamburgericon = <GiHamburgerMenu className={Hamburger} size="4rem" color="#4C6793"
    onClick={() => setOpen(!open)}/>

    const closeicon = <AiOutlineCloseCircle className={Hamburger} size="4rem" color="#DFF6FF"
    onClick={() => setOpen(!open)}/>
    
    return(
        <nav className="MobileNavigation">
            {open ? closeicon : hamburgericon}
            {open && <NavLinks />}
            
        </nav>
        
    )
}

export default MobileNavigation