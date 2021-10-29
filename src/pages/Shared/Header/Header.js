import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
// as={HashLink} to
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
        <Container>
                <Navbar.Brand href="#home"><span className="green">Evergreen</span> <span className="tomtato">Tarvel</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
          <Nav.Link as={HashLink} to="/home#package">packages</Nav.Link>
          <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
          <Nav.Link as={HashLink} to="/home#guide">Guide</Nav.Link>
          <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
        </Nav>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
        
      </Container>
    </Navbar>   
    );
};

export default Header;