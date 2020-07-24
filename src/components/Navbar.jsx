import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {


    return (
        <div>
            <div className="navbarRoot ">
                <div className="navBare">
                    <Link className="titleNav" to="/">Accueil</Link>
                    <Link className="titleNav" to="/histoire">Histoire</Link>
                    <Link className="titleNav" to="/tournee">Nos dates</Link>
                </div>
            </div>
        </div>


    );
}


export default Navbar;