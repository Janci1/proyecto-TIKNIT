import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import userData from '/src/assets/Datos/clientes.json'
import '/src/styles/login.css'
//import '/src/styles/login.css'

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      setErrorMessage ('Por favor, complete los campos.')
      return;
    }
    const user = userData.find(user=> user.email === email && user.contraseña === password )
    if (!user) {
      setErrorMessage('Usuario o contraseña incorrectos.')
      return;
    }

    login({ id: user.id, nombre: user.nombre, apellido: user.apellido, email: user.email, fecha_nacimiento: user.fecha_nacimiento, foto: user.foto_perfil, fecha_registro: user.fecha_registro });
    navigate('/');
  };

  const perfiles = userData.map(user => ({
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
    contraseña: user.contraseña
  }));
  
  

  return (
    <div className="contenedor">
      <div className='contenedorLogin'>
        <h2 className='titulo'>INICIAR SESIÓN</h2>
        <form onSubmit={handleSubmit}>
          <div className='contenedorCorreo'>
            <div className='contenedorSelector'>
              <p>Correo electrónico</p>
              <select className='selector'
                onChange={(e) => {
                  const selected = perfiles.find(p => p.nombre === e.target.value);
                  if (selected) {
                    setEmail(selected.email);
                    setPassword(selected.contraseña);}}}>
                      
                {perfiles.map((perfil, i) => (
                  <option key={i} value={perfil.nombre}>
                    {perfil.nombre} {perfil.apellido}
                  </option>
                ))}
              </select>
            </div>
            <input className='inputUsuario' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <p>Contraseña</p>
            <input className='inputUsuario' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
          </div>
          {errorMessage && <p className='mensajeError'>{errorMessage}</p>}
          <button type="submit">Acceder</button>
          <div className='opciones'>
            <Link>Restablecer contraseña</Link>
            <Link>Registrarse</Link>
          </div>
        </form>        
      </div>
    </div>
  );
}

export default Login;
