import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import Navbarr from '../../components/navbar/Navbar'
import Print from './Print';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
      style = {{backgroundColor: "white"}}
      
      closeButton>
        <Modal.Title style = {{color: "black"}} id="contained-modal-title-vcenter">
         Bordereau 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body 
      style = {{backgroundColor: "white"}}
      
      >
     <Print/>
      </Modal.Body>
    
    </Modal>
  );
}
export default function Avancement() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
    <Navbarr/>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Numéro de produit</th>
      <th>Référence</th>
      <th>Details produit</th>
      <th>Etat d'avancement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>
         <Button variant="outline-dark">En cours de taitement ...</Button> {""}
         <Button onClick={ () => setModalShow(true)} variant="outline-primary">Imprimer bordereau</Button>
     
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td> <Button variant="outline-danger">En cours de livraison ...</Button></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td> 
        <Button variant="outline-success">Livré</Button></td>
    </tr>
  
  </tbody>
</Table>
    </div>
  )
}
