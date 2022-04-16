import React, { useState } from 'react'
// import "./Multistep.css"
export default ()  => {

  return (
    <div>
   <div  class="container fadeInDown">
    <div id="formContent">
   
      <h2 class="active"> Saisir vos informations personnelles </h2>
      <form>
        <input type="text" class="fadeIn second" placeholder="Nom"/>
        <input type="text" class="fadeIn second" placeholder="Prénom"/>
        <input type="text" class="fadeIn second" placeholder="Numéro de téléphoner"/>

        <br/><br/><br/>
      </form>   
     
    </div>
  </div>
    </div>
  )
}