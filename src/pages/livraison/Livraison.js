import React, { useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../../assets/logoHd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Navbarr from '../../components/navbar/Navbar'
import './livraison.css'
import Footer from '../../components/footer/Footer'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Livraison () {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // illustrates Safari bug: https://bugs.webkit.org/show_bug.cgi?id=88587
  })
  return (
    <div>
      <div class='container'>
        <div class='car-wrapper'>
          <div class='car-wrapper_inner'>
            <Navbarr />

            <div class='car_outter'>
              <div class='car'>
                <div class='body'>
                  <div></div>
                </div>
                <div class='decos'>
                  <div class='line-bot'></div>
                  <div class='door'>
                    <div class='handle'></div>
                    <div class='bottom'></div>
                  </div>
                  <div class='window'></div>
                  <div class='light'></div>
                  <div class='light-front'></div>
                  <div class='antenna'></div>
                  <div class='ice-cream'>
                    <img
                      style={{ width: '80px', height: '80px' }}
                      src={logo}
                    ></img>
                  </div>
                </div>
                <div>
                  <div class='wheel'></div>
                  <div class='wheel'></div>
                </div>
                <div class='wind'>
                  <div class='p p1'></div>
                  <div class='p p2'></div>
                  <div class='p p3'></div>
                  <div class='p p4'></div>
                  <div class='p p5'></div>
                </div>
              </div>
            </div>
            <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col>
                  <Row style={{ marginBottom: '10%' }}>
                    <h1>Livraisons SolivreX Comprennent:</h1>
                  </Row>
                  <Row>
                    <Col>
                      <ul>
                       

                        <li>Livraison a domicile</li>
                        <li>Livraisons la nuit</li>
                        <li>Livraisons Express</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <li>Distribution de contrat</li>
                        <li>Livraison suite aux déménagementss</li>
                        <li>Livraison matériel (évennements)</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Card className='bg-dark text-white'>
                    <Card.Img
                      src='https://breakthroughplatforms.com/wp-content/uploads/2020/06/24-hours.jpg'
                      alt='Card image'
                    />
                    <Card.ImgOverlay>
                      <Card.Title>24H/24H</Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div class='background-stuff'>
          <div class='bg'></div>
          <div class='bg bg-2'></div>
          <div class='bg bg-3'></div>
          <div class='ground'></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
