import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
