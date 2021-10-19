import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
// import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png'

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
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
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            {
                user?.email ?
                <Button onClick={logOut}>Log out</Button> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            </Nav>
            <Navbar.Text>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    );
};

export default Header;