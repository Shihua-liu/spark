import NavLinks from "./NavLinks"
import Hamburger from "./Navigation.css"
import React, { useState } from 'react';

import "./Navigation.css"

import {AiOutlineCloseCircle} from "react-icons/ai"
import {BiMenuAltLeft} from "react-icons/bi"

const MobileNavigation = () =>{

    const [open, setOpen] = useState(false);

    const hamburgericon = <BiMenuAltLeft className={Hamburger} size="40px" color="orange"
    onClick={() => setOpen(!open)}/>

    const closeicon = <AiOutlineCloseCircle className={Hamburger} size="40px" color="orange"
    onClick={() => setOpen(!open)}/>
    
    return(
        <nav className="MobileNavigation">
            {open ? closeicon : hamburgericon}
            {open && <NavLinks />}
            
        </nav>
        
    )
}

export default MobileNavigation