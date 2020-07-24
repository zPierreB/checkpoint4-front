import React, { useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API_BASE_URL}/api/admins/register`,
      { name, email, password })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          setRedirect(true);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Container>
      <div>
      {redirect && <Redirect to="/tourneeadmin" />}
        <form >
          <div classNameName="container log">
            <div className="login-content">
              <form action="index.html" className="form-login">
                <h2 className="title">Connexion</h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user" />
                  </div>
                  <div className="div">
                    <input
                      type="text"
                      className="input"
                      placeholder="Nom"
                      value={name}
                      onChange={(event) => { setName(event.target.value); }}
                      required
                    />
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock" />
                  </div>
                  <div className="div">
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => { setEmail(event.target.value); }}
                      required
                    />
                  </div>
                </div>
                
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock" />
                  </div>
                  <div className="div">
                    <input
                      type="password"
                      className="input"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(event) => { setPassword(event.target.value); }}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="btn button-envoyer" value="Se connecter">Se connecter</Button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
