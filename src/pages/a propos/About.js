import React, { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import Navbarr from "../../components/navbar/Navbar";
import "./about.css";
import tof from "../../assets/carte.jpeg";
import Footer from "../../components/footer/Footer";
export default function About() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbarr />
      <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Row>
          <Col xs={12} md={8}>
            <section className="box">
              <p className="fancy">
                SolivreX est une société de livraison express a pour principale
                mission d’acheminer un ou plusieurs colis, sous toutes leurs
                formes, que vous souhaitiez faire livrer un document, des
                échantillons, une œuvre d’art, ou encore des pièces détachées
                industrielles, sous forme de colis ou de palettes.
                <br />• Le mode de transport le mieux adapté sera choisi en
                fonction du contenu, des poids et dimensions de votre
                marchandise ainsi que de vos contraintes précises d’enlèvement
                et de livraison. Le transport en « porte-à-porte ».
              </p>
            </section>
          </Col>
          <Col xs={12} md={4}>
            <img width={"100%"} height={"600px"} src={tof} alt="" />
          </Col>
        </Row>
      </Container>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </div>
  );
}
