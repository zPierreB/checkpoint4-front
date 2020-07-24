import React from 'react';
import picHologramme from '../assets/hologramme.jpg';
import './Histoire.css';

export default function Histoire() {
    return (
        <div>
            <h1 className="centered">Notre histoire</h1>
            <div className="enLigne">
                <div className="width50end">
                    <img className="picHistoire" src={picHologramme} alt="" />
                </div>
                <div className="width50text">
                    <h3>Naissance d'un cirque</h3>
                    <p className="widthDivText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className="width50end">
                    <img className="picHistoire displays" src={picHologramme} alt="" />
                </div>
            </div>
            <div className="enLigne">
                <div className="width50">
                    <img className="picHistoire" src={picHologramme} alt="" />
                </div>
                <div className="width50">
                    <h3>Pourquoi ce changement?</h3>
                    <p className="widthDivText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div className="enLigne">
                <div className="width50">
                    <img className="picHistoire" src={picHologramme} alt="" />
                </div>
                <div className="width50text">
                    <h3>Naissance d'un cirque</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className="width50">
                    <img className="picHistoire displays" src={picHologramme} alt="" />
                </div>
            </div>
        </div>
    );
}