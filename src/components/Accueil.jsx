import React from 'react';
import picHolo from '../assets/elephant.jpg';
import './Accueil.css';

export default function Accueil() {
    return(
        <div>
            <div>
                <img className="holo" src={picHolo} alt="" />
            </div>
            <h1 className="title-home">Bienvenue aux Wild Circus!</h1>
            <p className="text-home">Nous sommes un cirque qui pense à la protection des animaux dans les cirques qui sont tous maltraités et utilisez comme des bêtes de foires. C'est pour cela que notre cirque utilise une technologie de projection en hologramme. Des animaux virtuels qui ne subissent pas l'être humain. Pas mal vous ne trouvez pas? </p>
        </div>

    );
}