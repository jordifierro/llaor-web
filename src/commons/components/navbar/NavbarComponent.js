import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <h1>llaor</h1>
            </Link>
        </div>
    );
};

export default NavbarComponent;
