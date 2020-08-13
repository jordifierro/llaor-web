import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/" onClick={() => setOpen(false)}>
                        <img src={logoHorizontal} class="hidden-if-desktop"/>
                        <img src={logoVertical} class="hidden-if-mobile"/>
                    </Link>
                </div>
                <div class="icon" onClick={() => setOpen(!open)}>
                    { !open && <img src={iconHamburger} /> }
                    { open && <img src={iconCross} /> }
                </div>
            </div>
            <div className={`nav-menu ${open ? "" : "hidden-if-mobile"}`}>
                <ul>
                    <li>
                        <Link to="/projecte" onClick={() => setOpen(false)}>
                            Projecte
                        </Link>
                    </li>
                    <li>
                        <Link to="/llengua/diccionari" onClick={() => setOpen(false)}>
                            Diccionari
                        </Link>
                    </li>
                    <li class="space"></li>
                    <li>
                        <Link to="/natri" onClick={() => setOpen(false)}>
                            Natri
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacte" onClick={() => setOpen(false)}>
                            Contacte
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;
