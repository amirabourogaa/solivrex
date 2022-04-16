import React, { useEffect } from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'
import AddClient from '../../components/Admin/AddClient/AddClient'
import Swipe from '../../components/carousel/CarouselHome'
export default function Admin () {
  useEffect(() => {
    let gooIndex = document.getElementById('goo-index')
    var spans = document.querySelectorAll('#spn')
    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener('click', () => {
        gooIndex.style.top = 100 * i + 'px'
        let allScreens = document.querySelectorAll('.screen')
        allScreens.forEach(e => {
          e.classList.remove('visible')
        })
        let nowVisible = document.getElementById('screen_' + i)
        nowVisible.classList.add('visible')
      })
    }
  })
  return (
    <div>
      <h1>Bienvenue SolivreX Admin</h1>
      <div className='menu'>
        <ul>
          <li>
            <span id='spn'>
              <i className='fa fa-home'></i>
            </span>
          </li>
          <li>
            <span id='spn'>
              <i className='fa fa-edit'></i>
            </span>
          </li>
          <li>
            <span id='spn'>
              <i className='fa fa-laptop'></i>
            </span>
          </li>
          <li>
            <span id='spn'>
              <i className='fa fa-tag'></i>
            </span>
          </li>
          <span className='goo-index' id='goo-index'></span>
        </ul>
      </div>

      <div  id='content-wrapper'>
        <div id='screen_0' style = {{marginTop: "100px"}} className='screen visible'>
          <Swipe />
        </div>

        <div id='screen_1' className='screen'>
          <Container>

         
            <Row>
            <h3>Liste des clients</h3>
              <Table id='tab' striped bordered hover variant='danger'>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Code</th>
                    <th>Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bourogaa</td>
                    <td>Amira</td>
                    <td>amira.bourogaa.dev@gmail.com</td>
                    <td>+216 58 202 884</td>
                    <td>AB001</td>
                    <td>Client a risque</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <AddClient />

           
            </Row>
          </Container>

          <div></div>
        </div>

        <div id='screen_2' className='screen'>
          <h2>Gérer les colis</h2>
        </div>

        <div id='screen_3' className='screen'>
          <h2>Help Other To Get The Same</h2>
         
     
        </div>
      </div>
    </div>
  )
}
