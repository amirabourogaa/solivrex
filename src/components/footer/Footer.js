import React from 'react';
import "./footer.css"
import logo from "../../assets/logoHd.png"
export default function Footer() {
    var day = new Date()
   var year = day.getFullYear()
  return (
  <div>
      <footer id='contact' className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Adresse</h4>
                                <span><strong>01,Rue de la lavande Rades Melyen 2040</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Mobile</h4>
                                <span><strong>+216 93 512 928</strong> </span><br/>
                                <span><strong>+216 24 265 023</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Email</h4>
                                <span><strong>solivrex.delivery@yahoo.com</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a  href="https://www.google.ru/"><img src={logo} className="img-fluid" alt="logo"/></a>
                            </div>
                        
                          
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Nos liens</h3>
                            </div>
                            <ul className='ul'>
                                <li><a  href="https://www.google.ru/">Accueil</a></li>
                                <li><a  href="https://www.google.ru/">Livraison</a></li>
                                <li><a  href="https://www.google.ru/">services</a></li>
                                <li><a  href="https://www.google.ru/">A propos</a></li>
                                <li><a  href="https://www.google.ru/">Contact</a></li>
                                <li><a  href="https://www.google.ru/">Se connecter</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                        <div className="footer-social-icon">
                                <span>Suivez nous</span>
                                <a  href="https://www.google.ru/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a  href="https://www.google.ru/"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a  href="https://www.google.ru/"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; {year}, All Right Reserved <a href="https://codepen.io/anupkumar92/">SolivreX</a></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
  </div>
  )
}
