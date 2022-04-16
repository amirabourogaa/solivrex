import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import './Steps.css'
function MydModalWithGrid (props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Suivie colis
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Row>
            <Col xs={12}>
              <div id='loginnn'>
                <div className='user'>
                  <input type='text' placeholder='Nom du produit' />
                </div>
                <div className='pass'>
                  <input type='text' placeholder='Référence: ABC-123' />
                </div>
                <div className='send'>
                  <a href='login'>
                    <input type='submit' value='Envoyer' />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default function Steps () {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <main>
        <ul className='infoGraphic'>
          <li>
            <a style={{ textDecoration: 'none', color: 'black' }} href='auth'>
              <div className='numberWrap'>
                <div className='number fontColor1'>1</div>
                <div className='coverWrap'>
                  <div className='numberCover'></div>
                </div>
              </div>
              <div className='content'>
                {/* <div className="icon iconCodepen"></div> */}
                <h2>Créer un compte</h2>
              </div>
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none', color: 'black' }} href='auth'>
              <div className='numberWrap'>
                <div className='number fontColor2'>2</div>
                <div className='coverWrap'>
                  <div className='numberCover'></div>
                </div>
              </div>
              <div className='content'>
                <h2>Se connecter</h2>
              </div>
            </a>
          </li>
          <li onClick={() => setModalShow(true)}>
            <div className='numberWrap'>
              <div className='number  fontColor3'>3</div>
              <div className='coverWrap'>
                <div className='numberCover'></div>
              </div>
            </div>
            <div className='content'>
              <h2>Suivie colis</h2>
              <br />
              <p>
                Clickez pour saisir vos coordonnées: <br />
                Code colis et référence colis.
              </p>
            </div>
          </li>

          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ul>
      </main>
    </div>
  )
}
