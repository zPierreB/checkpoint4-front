import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function TestBurger() {
    const [burgerChecked, setBurgerChecked] = useState(true);
    return (
        <div className="background">
            <nav className={burgerChecked ? "openMenu" : ""}>
                <div className="background">
                    <Link className="avantLink" to="/" onClick={() => setBurgerChecked(!burgerChecked)}>Accueil</Link>
                    <Link className="avantLink" to="/histoire" onClick={() => setBurgerChecked(!burgerChecked)}>Histoire</Link>
                    <Link className="avantLink" to="/tournee" onClick={() => setBurgerChecked(!burgerChecked)}>Date</Link>
                </div>
            </nav>
            <div className="menu-container">
                <input type="checkbox" className="toggler" onClick={() => setBurgerChecked(!burgerChecked)} />
                <div className="hamburger">
                    <div />
                </div>
            </div>
        </div>

    )
}
export default TestBurger;