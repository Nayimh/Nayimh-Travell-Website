import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useFirebase from '../../../Hooks/useFireBase';


const Header = () => {
  const { user, logOut} = useFirebase();
  
  return (
    <div >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
<Container>
<Navbar.Brand href="#home"><span className="green">Evergreen</span> <span className="tomtato">Tarvel</span></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
<Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
         <Nav.Link as={HashLink} to="/home#package">packages</Nav.Link>
          
         {/* <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link> */}
             
              <Nav.Link as={HashLink} to="/myOrder">My Order</Nav.Link>
              
              
              { user?.email &&
                <Nav.Link as={HashLink} to="/addservice">Add Service</Nav.Link>}
          
              {user?.email &&
                <Nav.Link as={HashLink} to="/manageOrder">Manage Order</Nav.Link>}

</Nav>
<Nav>
  
  <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
            
  <Nav.Link eventKey={2}>Signed in as:   
             
               
                { user?.displayName ? user?.displayName : user?.email}  
            </Nav.Link>
            {user?.email &&
              <Nav.Link as={HashLink} to="/Login"><button onClick={logOut} className="btn-danger text-white">Logout</button></Nav.Link>}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
    </div>

      
    );
};

export default Header;