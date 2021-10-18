import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'

const Header = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
            <img
                src={logo}
                width="50"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/>
                <Navbar.Brand href="#home"><b>i-Care</b></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
            <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    );
};

export default Header;