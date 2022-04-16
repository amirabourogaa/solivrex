import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Button, Col, Container, Row} from 'react-bootstrap'
import logo from '../../assets/logoPng.png'
export default function Print () {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  return (
    <div className='bg-gray-200 p-6'>
      <div style = {{border : "2px solid red"}} ref={componentRef}>
        <Container >
          <Row className='align-items-center'>
            <Col>
              <h5>Bordereau  N°:</h5>
              <h6>Date:</h6>
            </Col>
            <Col>
              <img width={'100%'} src={logo}></img>
            </Col>
          </Row>
          <Row>
            <Col>
       
                <strong>Réf expéditeur</strong>
                <p>Nom ou raison sociale</p>
                <p>Numéro de téléphone</p>
                <p>Adresse</p>
        
            </Col>
            <Col>
        
            <strong>Réf client</strong>
            <p>Nom et prénom</p>
            <p>Adresse:</p>
            <p>Poids:</p>
           
            </Col>
          </Row>
      
          <Row style = {{marginTop: "50px", marginBottom:"30px"}}>
              <strong>Montant (DNT)</strong>
            <Col>Montant en chiffre</Col>
            <Col>Montant en lettre</Col>
            <Col>Code à barre</Col>
          </Row>
        </Container>
      </div>
      <Button onClick={handlePrint} variant='danger'>
        Imprimer
      </Button>
    </div>
  )
}
