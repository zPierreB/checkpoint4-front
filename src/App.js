import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Accueil from './components/Accueil';
import Histoire from './components/Histoire';
import Tournee from './components/Tournee';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import TourneeAdmin from './components/TourneeAdmin';
import TestBurger from './components/testBurger';


const App = () => {
  const API_BASE_URL=process.env.REACT_APP_API_BASE_URL;
  const [assoc, setAssoc] = useState([]);
  useEffect(() => {
    axios.post(`${API_BASE_URL}/api/admins/register`, {name:'Pierre', email: "coucou@gmail.com", password:"coucoucou"})
      .then((res) => res.data)
      .then((data) => {
        setAssoc(data);
      });
  }, [API_BASE_URL]);
  return (
    <>
    <Container maxWidth className="application">
    <Router>
      {/* <Navbar /> */}
      <TestBurger />
      <div>
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/histoire">
            <Histoire />
          </Route>
          <Route path="/tournee">
            <Tournee />
          </Route>
          <Route path="/tourneeadmin">
            <TourneeAdmin />
          </Route>
          <Route path="/login"> 
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </Container>
    </>
  );
}

export default App;
