import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaQuestion } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";//aqui
import userData from '/src/assets/Datos/clientes.json'
import '/src/styles/header.css'

function Header() {
  const [menuVisible, setMenuVisible] = useState(false); 
  const menuRef =  useRef(null);

  //funcion que hace que el menu se vea y que se cierre al clicar fuera
  const toggleMenu = () => {setMenuVisible(!menuVisible);};
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) // Si clicas fuera del menú          
      ) {
        setMenuVisible(false);  // Cerrar el menú
      }
    };
      //escuchamos los clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='contenedorNavegador'>
      <div className={`overlay ${menuVisible ? 'activo' : ''}`} onClick={() => setMenuVisible(false)}></div>

      <nav>
        <div className='contenedorCabecera'>
          <div className='menuIcon' onClick={toggleMenu}>
            <FaBars />
          </div>
          <Link to="/">
            <img className='logoPrincipal' src="/src/assets/logoTIKNIT.png" alt="logotipo principal" />
          </Link>
          <div className='subContenedorCabecera'>
            <Link to="/asistencia">
            <div className='asistencia'> <FaQuestion/> </div>
            </Link>
            <Link to="/cesta">
            <div className='tickets'><IoTicket /></div> 
            </Link>
            <Link to="/perfil">
              <img
                className='fotoPerfil'
                //* De momento colocaremos la foto de un perfil vacio
                src='/src/assets/datos/clientes/sinPerfil.jpg'
                alt={`Foto de ${userData.nombre}`}
              />
            </Link>
          </div>
        </div>
        <ul ref={menuRef} 
        className={`navegador ${menuVisible ? 'mostrar' : ''}`}>
          <li className='menuInvisibles'><Link to="/perfil">
            <img className='fotoPerfil1'
                //* De momento colocaremos la foto de un perfil vacio
                src='/src/assets/datos/clientes/sinPerfil.jpg'
                alt={`Foto de ${userData.nombre}`}
            />
            <div className='textoPerfil'>
            <h1>PERFIL</h1>
            <p>correo@ejemplo</p>
            </div>
            </Link></li>
          <li><Link to="/">EVENTOS</Link></li>
          <li><Link to="/discotecas">DISCOTECAS</Link></li>
          <li><Link to="/agenda">AGENDA</Link></li>
          <li className='asistenciaMenu'><Link to="/asistencia">ASISTENCIA</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
          <li className='menuInvisibles' id='cerrarSesion'><Link>CERRAR SESION</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;