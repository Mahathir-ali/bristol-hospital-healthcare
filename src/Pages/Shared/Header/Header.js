import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo3.png'
import './Header.css'

const Header = () => {
    const {user, logOut, name} = useAuth();
    return (
        <>
          <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="nav_bar text-white"> 

            <Container>

            <img
                src={logo}
                width="50"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/>

                <Navbar.Brand href="#home"><b>Bristol Hospital</b></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-light">
            <Nav.Link className="nav-link" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="nav-link" as={HashLink} to="/services#services">Services</Nav.Link>
            <Nav.Link className="nav-link" as={HashLink} to="/education">Education</Nav.Link>
            <Nav.Link className="nav-link" as={HashLink} to="/register">Register</Nav.Link>
            {
                user?.email ?
                <Button onClick={logOut}>Log out</Button> :
                <Nav.Link className="nav-link" as={HashLink} to="/login">Login</Nav.Link>
            }
            </Nav>
            <Navbar.Text>
        Signed in as: <a href="#login">{user.displayName} {name}</a>
      </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    );
};

export default Header;