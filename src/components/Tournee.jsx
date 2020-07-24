import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tournee.css';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Tournee() {
    const [tours, setTour] = useState([]);

    useEffect(() => {
        function getDates() {
            axios.get(`${API_BASE_URL}/api/tournee`)
                .then((res) => res.data)
                .then((data) => { setTour(data); });
        }

        getDates();
    }, []);

    return (
        <div className="">
            <div className="">
                <h2 className="title-date" >Retrouvez nous : </h2>
                <ul className="dateList">
                    {tours.map((tour) => (
                        <li key={tour.id} className="dateList">
                            {'Venez nous retrouver au '}
                            {tour.theater}
                            {' '}
                            <span>
                                le
                            {' '}
                                {(new Date(tour.dateShow)).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' })}
                                {' à '}
                            {tour.city}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Tournee;