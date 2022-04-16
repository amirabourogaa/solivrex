import React, { useState } from 'react'

export default () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div>
      <div className='container fadeInDown'>
        <div id='formContent'>

          <h2 className='active'> Choisir la methode de paiement </h2>
          <br/><br/>
          <select
            class='form-select form-select-md mb-3'
            aria-label='.form-select-md example'
            style={{width:"80%" , marginLeft : "10%"}}
          >
            <option selected>Paiement ...</option>
            <option value='1'>Par carte bancaire</option>
            <option value='2'>Opérateur téléphonique</option>
            <option value='3'>Espéce à la livraison</option>
          </select>
          <br/><br/>
        </div>
      </div>
    </div>
  )
}
