import React from "react";
import {Modal, Row } from "react-bootstrap";
import "./services.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="modal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Suivie colis
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
        <div id="loginnn">
  <div className="user" >
    <input type="text" placeholder="Nom du produit"/>
  </div>
  <div className="pass" >
    <input type="text" placeholder="Référence: ABC-123" />
  </div>
  <div className="send">
   <a href="login"><input type="submit" value="Envoyer" /></a> 
  </div>
</div>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default function Services() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="information-container">
        <div className="inner-container">
          <h1 className="section-title">Etapes suivie colis</h1>
          <div className="border"></div>
          <div className="service-container">
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-user-plus"></i>
              </div>
              <div className="service-title">Créer votre compte</div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-sign-in"></i>
              </div>
              <div className="service-title">Connectez vous</div>
            </div>

            <div className="service-box">
              <div onClick={() => setModalShow(true)} className="service-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <div className="service-title">Remplir le formulaire</div>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
