import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaQuestion } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";//aqui
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import '/src/styles/header.css'

function Header() {
  const [menuVisible, setMenuVisible] = useState(false); 
  const menuRef =  useRef(null);
  const { user, logout } = useContext(AuthContext);

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
            <div className='asistencia'><FaQuestion/> </div>
            </Link>
            <Link to="/cesta">
            <div className='tickets'><IoTicket /></div> 
            </Link>
            <Link  to={user ? '/perfil':'/login'}>
              <img
                className='fotoPerfil'
                //* De momento colocaremos la foto de un perfil vacio
                src={user?.foto || '/src/assets/data/clientes/sinPerfil.jpg'}
                alt={`Foto de ${user?.nombre || 'perfil'}`}
                />
            </Link>
          </div>
        </div>
        <ul ref={menuRef} 
        className={`navegador ${menuVisible ? 'mostrar' : ''}`}>
          <li className='menuInvisibles'>
            <Link  to={user ? '/perfil':'/login'} onClick={() => setMenuVisible(false)}>
            <img className='fotoPerfil1'
                //* De momento colocaremos la foto de un perfil vacio
                src={user?.foto||'/src/assets/data/clientes/sinPerfil.jpg'}
                alt={`Foto de ${user?.nombre || 'perfil'}`}
            />
            <div className='textoPerfil'>
            <h1>{user ? `${user.nombre} ${user.apellido}`: 'PERFIL' }</h1>
            <p>{user ? `${user.email}`: 'correo@cliente.com' }</p>
            </div>
            </Link></li>
          <li><Link to="/" onClick={() => setMenuVisible(false)}>EVENTOS</Link></li>
          <li><Link to="/discotecas" onClick={() => setMenuVisible(false)}>DISCOTECAS</Link></li>
          <li><Link to="/agenda" onClick={() => setMenuVisible(false)}>AGENDA</Link></li>
          <li className='asistenciaMenu' ><Link to="/asistencia" onClick={() => setMenuVisible(false)}>ASISTENCIA</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuVisible(false)}>CONTACTO</Link></li>
          {user ? (
            <li className='menuInicioSesion' id='cerrarSesion'>
              <Link onClick={()=> {logout (); setMenuVisible(false)}}>CERRAR SESIÓN</Link>
            </li>
          ) : (
            <li className='menuInicioSesion' id='iniciarSesion'>
              <Link to="/login" onClick={() => setMenuVisible(false)}>INICIAR SESIÓN</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;