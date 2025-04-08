import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import '/src/styles/perfil.css'

function Perfil () {
  
  const { user, logout } = useContext(AuthContext);

if (!user) {
  return <p>No hay sesión activa.</p>;
}

return (
  <div className='general'>
    <div className="contenedorPerfil">
      <img
        src={user.foto}
        alt="Foto de perfil"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem'
        }}
      />
      <h2>{user.nombre} {user.apellido}</h2>
      <p> {user.email}</p>
      <p><strong>Fecha de nacimiento</strong><br /> {user.fecha_nacimiento}</p>
      <p><strong>Fecha de registro:</strong> <br />{user.fecha_registro}</p>

      <div className='linksPerfil'>
        <Link to="/tiketsUsuario">Entradas</Link>
        <Link to="/historialCompraUsuario">Historial</Link>
        <Link to="/cambiarContraseña">Cambiar contraseña</Link>
        <Link to="/" onClick={()=> {logout ()}}>Cerrar Sesion</Link>
      </div>
    </div>
  </div>
);
};
export default Perfil;