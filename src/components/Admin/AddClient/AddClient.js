import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './AddClient.css'
export default function AddClient () {
   const [nom,setNom]= useState("") 
   const [prenom,setPrenom]= useState("") 
   const [email,setEmail]= useState("") 
   const [tel,setTel]= useState(0) 
   const [commentaire,setCommentaire]= useState("") 

  function handleClick (){
    const newClient = {
        nom: nom,
        prenom: prenom,
        email:email,
        tel : tel,
        commentaire: commentaire
 }
 console.log(newClient)
 axios.post("http://localhost:5000/api/cient/add",newClient)
  }
  return (
    <div>

<Card variant = "dark">
  <Card.Header  as="h5">Ajouter un client</Card.Header>
  <Card.Body>
    <Card.Text>
      <div className='container'>
        <div className='bg-light'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 p-5 bg-white rounded-3'>
              <div className='d-flex flex-column'>
                <form className='row mb-3'>
                <div className='col-md-6 p-3'>
                
                </div>
                <div className='col-md-6 p-3'>
                </div>
                <div className='col-md-6 p-3'>
                  <input
                    required
                    placeholder='Nom'
                    type='text'
                    name=''
                    id=''
                  />
                </div>
                <div className='col-md-6 p-3'>
                  <input
                    required
                    placeholder='Prénom'
                    type='text'
                    name=''
                    id=''
                  />
                </div>
                <div className='col-md-6 p-3'>
                  <input
                    required
                    placeholder='Email'
                    type='email'
                    name=''
                    id='mail'
                  />
                </div>
                <div className='col-md-6 p-3'>
                  <input
                    required
                    placeholder='Téléphone'
                    type='tel'
                    name=''
                    id=''
                  />
                </div>
                <div className='col-md'>
                  <textarea
                    required
                    name=''
                    placeholder='Commentaire'
                    id=''
                    cols='30'
                    rows='1'
                  ></textarea>
                </div>
                <div className='text-end mt-4'>
                  <input
                    className='btn px-4 py-3 btn-outline-dark'
                    type='submit'
                    value='Envoyer'
                  />
                </div>
              </form>
              </div>
            
            </div>
            
            <div className='col-lg-4 col-md-12 text-white aside px-4 py-5'>
            <h2>SolivreX</h2>
             
            </div>
          </div>
        </div>
      </div>

    </Card.Text>
  </Card.Body>
</Card>
 
         </div>
  )
}
