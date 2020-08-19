import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoHorizontal from 'images/logo_horizontal.png'
import logoVertical from 'images/logo_vertical.png'
import iconHamburger from 'images/icon_hamburger.png'
import iconCross from 'images/icon_cross.png'

const NavbarComponent = () => {
    const [open, setOpen] = useState(false)

    if (open) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "initial";
    }

    return (
        <nav>
            <div class="nav-images">
                <div class="logo">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                        <img src={logoHorizontal} class="hidden-if-desktop" alt="Logo" />
                        <img src={logoVertical} class="hidden-if-mobile" alt="Logo" />
                    </NavLink>
                </div>
                <div class="icon" onClick={() => setOpen(!open)}>
                    { !open && <img src={iconHamburger} alt="Obrir el menú" /> }
                    { open && <img src={iconCross} alt="Tancar el menú" /> }
                </div>
            </div>
            <div className={`nav-menu ${open ? "" : "hidden-if-mobile"}`}>
                <ul>
                    <li>
                        <NavLink
                            to="/projecte"
                            onClick={() => setOpen(false)}
                            activeClassName="active">
                            Projecte
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/llengua/diccionari"
                            onClick={() => setOpen(false)}
                            activeClassName="active">
                            Diccionari
                        </NavLink>
                    </li>
                    <li class="space"></li>
                    <li>
                        <NavLink
                            to="/natri"
                            onClick={() => setOpen(false)}
                            activeClassName="active">
                            Natri
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mane"
                            onClick={() => setOpen(false)}
                            activeClassName="active">
                            Mane?
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;
