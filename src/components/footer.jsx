import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            /*redes sociales*/
            <div className='footer-top'>
                <div className='footer-social'>
                    <span>Síganos</span>
                    <div className='redes-social'>
                    <Link to="https://react-icons.github.io/react-icons/search/#q=facebook"><FaFacebookSquare /></Link>
                    <FaFacebookSquare />
                    <FaFacebookSquare />
                    <FaFacebookSquare />
                    </div>
                </div>
            </div>
            //*menu de columnas
            <div className='footer-columns'>
                <div className='footer-column'>
                    <h4>SOBRE NOSOTROS</h4>
                    <ul>
                        <li>¿Que es Tiknit?</li>
                        <li>¿Cómo funciona?</li>
                        <li>¿Qué ofrecemos?</li>
                        <li>Precio</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>ORGANIZA TU EVENTO</h4>
                    <ul>
                        <li>¿Como organizar un evento?</li>
                        <li>Ventajas de organizar el evento</li>
                        <li>Promocionar tu evento</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>ATENCION AL CLIENTE</h4>
                    <ul>
                        <li>Contáctanos</li>
                        <li>¿Como puedo controlar el acceso?</li>
                        <li>¿Cómo se saca el dinero recaudado?</li>
                    </ul>
                </div>
            </div>
            /*Legal*/
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