import React, { useState } from 'react'

export default () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <div>
     <div class="container fadeInDown">
    <div id="formContent">
   
      <h2 class="active"> Saisir vos coordonnés de livraison </h2>
      <form>
        <input type="text" class="fadeIn second" placeholder="Adresse complète"/>
        <input type="text" class="fadeIn second" placeholder="Adresse secondaire"/>
        <input type="text" class="fadeIn second" placeholder="Code postal"/>
 
        <br/><br/><br/>
      </form>   
     
    </div>
  </div>
    </div>
  )
}