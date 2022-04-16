import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbarr from '../../components/navbar/Navbar'
import './Contact.css'
export default function Contact () {
  return (
      <div>
          <Navbarr/>
          <div id='Contact'>
      <div className='contact-form'>
        <div className='first-container'>
      
        </div>
        <div className='second-container'>
          <h2>Contactez nous </h2>
          <form>
            <div className='form-group'>
              <label for='name-input'>Votre nom s'il vous plait*</label>
              <input
                id='name-input'
                type='text'
                placeholder='Prénom'
                required='required'
              />
              <input type='text' placeholder='Nom' required='required' />
            </div>
            <div className='form-group'>
              <label for='email-input'>Entrez votre adresse mail*</label>
              <input
                id='email-input'
                type='text'
                placeholder='Eg. example@email.com'
                required='required'
              />
            </div>
            <div className='form-group'>
              <label for='phone-input'>Entrez votre numéro de téléphone*</label>
              <input
                id='phone-input'
                type='text'
                placeholder='Eg. +216 22 XXX XXX '
                required='required'
              />
            </div>
            <div className='form-group'>
              <label for='message-textarea'>Message</label>
              <textarea
                id='message-textarea'
                placeholder='...'
              ></textarea>
            </div>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
      </div>
   
  )
}
