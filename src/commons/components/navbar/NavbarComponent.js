import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoHorizontal from 'images/logo_horizontal.png'
import logoVertical from 'images/logo_vertical.png'
import iconHamburger from 'images/icon_hamburger.png'
import iconCross from 'images/icon_cross.png'

const NavbarComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div class="nav-images">
                <div class="logo">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                        <img src={logoHorizontal} class="hidden-if-desktop"/>
                        <img src={logoVertical} class="hidden-if-mobile"/>
                    </NavLink>
                </div>
                <div class="icon" onClick={() => setOpen(!open)}>
                    { !open && <img src={iconHamburger} /> }
                    { open && <img src={iconCross} /> }
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
                            to="/contacte"
                            onClick={() => setOpen(false)}
                            activeClassName="active">
                            Contacte
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;
