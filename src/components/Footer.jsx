import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3>Acerca de Nosotros</h3>
          <p>Somos una empresa dedicada a la venta tecnológica. Nuestro objetivo es proporcionar soluciones creativas y efectivas para nuestros clientes.</p>
        </div>
        <div className="footer__column">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="../nosotros.html">Nosotros</a></li>
            <li><a href="../contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Contacto</h3>
          <p>Dirección: Carrera 90 #6a - 47, Bogota, Colombia</p>
          <p>Email: info@Infinitoo.com</p>
          <p>Teléfono: +57 3108854196</p>
        </div>
      </div>
      <div className="footer__social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} />
         </a> 
      </div>
    </footer>
  );
};

export default Footer;
