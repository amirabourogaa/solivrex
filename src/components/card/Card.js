import React from "react";
import "./card.css";
export default function Card() {
  return (
    <div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://aspar.group/img/deliv.png')",
          }}
        >
        </div>
        <div className="back">
          <h2>Suivie</h2>
          <p>
          On vous offre la suivie detaillée de l'état de votre colis.
            Avec SolivreX on vous garantie les bonnes informations au bon moment
          </p>
        </div>
      </div>

      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/photos-gratuite/delivery-concept-handsome-african-american-delivery-man-se-precipite-pour-livraison-paquet-pour-client-isole-fond-studio-gris-espace-copie_1258-1210.jpg?size=626&ext=jpg')",
          }}
        >
        </div>
        <div className="back">
          <h2>Rapidité</h2>
          <p>
           La rapidité est prise en compte
           L'équipe SolivreX vous garantie la ponctualité 
          </p>
        </div>
      </div>

      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/photos-gratuite/joyeux-livreur-entre-tas-colis_23-2147787824.jpg?size=626&ext=jpg')",
          }}
        >
        </div>
        <div className="back">
          <h2>Bon service</h2>
          <p>
           Votre satisfaction compte pour nous.
            
          </p>
        </div>
      </div>
    </div>
  );
}
