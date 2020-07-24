import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './Tournee.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Tournee() {
   
    const [newDate, setNewDates] = useState({});
    const [dates, setDates] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDates((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      function submitForm(e) {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/api/tournee`, newDate, {
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //   },
        })
          .then((res) => res.data)
          .then(() => {
            alert('Date créé !');
            setRefresh(!refresh);
          })
          .catch((e) => {
            console.error(e);
            alert(`Erreur : ${e.message}`);
          });
      }
      useEffect(() => {
        function getDates() {
          axios.get(`${API_BASE_URL}/api/tournee`)
            .then((res) => res.data)
            .then((data) => { setDates(data); });
        }
    
        getDates();
      }, [refresh]);
    return (

        <div>
            <h1 className="titleDate">Créer une date</h1>
            <form className="formulaireDate" onSubmit={submitForm}>
                Ville:
            <input className="BoutonTour" onChange={handleChange}  type="text" name="city" />
                Lieu:
            <input className="BoutonTour" onChange={handleChange} type="text" name="theater" />
              Date:
            <input className="BoutonTour" onChange={handleChange}  type="date" name="dateShow" />
                <button type="submit" className="ajoutButton">Ajouter</button>
            </form>
        </div>

    );
}