import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import "./navbar.css"
export default function Navbarr() {
    return (
        <div>
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <img 
    src='https://www.nicepng.com/png/full/283-2835410_express-del-fast-delivery-logo-png.png'
    alt='delivery'
    style={{width: "50px"}}

   />

   </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Navbar.Brand style = {{color: "red",fontSize: "20px"}} href="/">SolivreX</Navbar.Brand>
      <Nav.Link id='navLink'  href="livraison">Livraison</Nav.Link>
      <Nav.Link id='navLink' href="service">Service</Nav.Link>
      <Nav.Link id='navLink' href="apropos">A propos</Nav.Link>
      <Nav.Link id='navLink' href="contact">Contact</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link id='navLink' href="auth">Connexion</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
