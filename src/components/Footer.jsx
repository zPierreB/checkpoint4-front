import React from 'react';
import Container from '@material-ui/core/Container';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Container maxWidth className="bloc">

      <div className="">
        <div className="logo-rs ">
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pierre-brière-30a0b11a4"
          >
            <img
              className="logo"
              src={Linkedin}
              alt="linkedin"
            />
          </a>
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zPierreB"
          >
            <img
              className="logo"
              src={Github}
              alt="github"
            />
          </a>
          <Link className="administrateur" to="/login" >Mode admin</Link>
        </div>
       
      </div>
    </Container>
  );
}

export default Footer;