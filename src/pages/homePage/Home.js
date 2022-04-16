import React from 'react'
import Navbarr from '../../components/navbar/Navbar'
// import CarouselHome from "../../components/carousel/CarouselHome";
import Footer from '../../components/footer/Footer'
import './home.css'
import { Container, Row } from 'react-bootstrap'
// import Card from "../../components/card/Card";
import Counter from '../../components/counter/Counter'
import Services from '../../components/servicesSection/Services'
import Steps from '../../components/steps/Steps'
export default function Home () {
  return (
    <div>
      <Navbarr />
      <Container fluid></Container>
      <div className='slideshow'>
        <h1 id='titlesection4'>
          <small>SolivreX</small> Les leaders{' '}
          <small>Nous sommes toujours là pour vous 24H/24</small>
        </h1>

        <div
          className='slideshow-image'
          style={{
            backgroundImage:
              "url('https://amp.insurancejournal.com/app/uploads/2017/12/delivery-van-580x400.jpg')"
          }}
        ></div>
        <div
          className='slideshow-image'
          style={{
            backgroundImage:
              "url('https://www.reviewsxp.com/blog/wp-content/uploads/2020/06/delivery-850x491.jpg')"
          }}
        ></div>
        <div
          className='slideshow-image'
          style={{
            backgroundImage:
              "url('https://cleantechnica.com/files/2017/12/renault-Brighton-Hove-Renault-Kangoo-ZE-33.jpg')"
          }}
        ></div>
      </div>

      {/* <div className="title_lines">Découvrez nos services</div> */}

      <Steps />
      <Counter />

      <Container>
        <Row>{/* <Card /> */}</Row>
      </Container>

      <Footer />
    </div>
  )
}
