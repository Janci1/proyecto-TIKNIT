import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import '../styles/footer.css';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const togglesection = (section) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    return (
        <footer className='footer'>

            <div className='footer-top'>
                <div className='footer-social'>
                    <span>Síganos</span>
                    <div className='redes-social'>
                        <a href="https://www.facebook.com/" ><FaFacebookF /></a>                
                        <a href="https://www.instagram.com/" ><SiInstagram /></a>
                        <a href="https://www.tiktok.com/" ><FaTiktok /></a>
                    </div>
                </div>
            </div>
            
            <div className='footer-columns'>
                    <div className='footer-column'>
                        <h4 onClick={() => togglesection('nosotros')}>SOBRE NOSOTROS
                            <span className='toggle-icon'>{openSection === 'nosotros' ? '-' : '+'}</span>
                        </h4>
                        <ul className={openSection === 'nosotros' ? 'open' : ''}>
                            <li>¿Que es Tiknit?</li>
                            <li>¿Cómo funciona?</li>
                            <li>¿Qué ofrecemos?</li>
                        </ul>
                    </div>

                    <div className='footer-column'>
                        <h4 onClick={() => togglesection('evento')}>ORGANIZA TU EVENTO
                            <span className='toggle-icon'>{openSection === 'evento' ? '-' : '+'}</span>
                        </h4>
                        <ul className={openSection === 'evento' ? 'open' : ''}>
                            <li>¿Como organizar un evento?</li>
                            <li>Ventajas de organizar el evento</li>
                            <li>Promocionar tu evento</li>
                        </ul>
                    </div>

                    <div className='footer-column'>
                        <h4 onClick={() => togglesection('cliente')}>ATENCION AL CLIENTE
                            <span className='toggle-icon'>{openSection === 'cliente' ? '-' : '+'}</span>
                        </h4>
                        <ul className={openSection === 'cliente' ? 'open' : ''}>
                            <li>¿Como puedo controlar el acceso?</li>
                            <li>¿Cómo se saca el dinero recaudado?</li>
                            <li>Contáctanos</li>
                        </ul>
                    </div>
            </div>
            
            <div className='footer-bottom'>
                <div className='footer-legal'>
                    <a href='#'>condiciones de uso</a> |
                    <a href='#'>Politica de privacidad</a> |
                    <a href='#'>Cookies</a>
                </div>
                <p>© 2025 TIKNIT. Todos los derechos reservados.</p>
            </div>



        </footer>
    )
}
export default Footer;