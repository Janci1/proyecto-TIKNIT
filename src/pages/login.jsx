import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import userData from '/src/assets/data/clientes.json'
import '/src/styles/login.css'
//import '/src/styles/login.css'

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false); // línea nueva


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      setErrorMessage ('Por favor, complete los campos.')
      return;
    }
    const usuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    const todosLosUsuarios = [...userData, ...usuariosLocal];

    const user = todosLosUsuarios.find(user=> user.email === email && user.contraseña === password );
    
    if (!user) {
      setErrorMessage('Usuario o contraseña incorrectos.')
      return;
    }

    login({ 
      id: user.id, 
      nombre: user.nombre, 
      apellido: user.apellido, 
      email: user.email, 
      fecha_nacimiento: user.fecha_nacimiento, 
      foto: user.foto_perfil, 
      fecha_registro: user.fecha_registro 
    });
    navigate('/');
  };

  const [registerData, setRegisterData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    fecha_nacimiento: '',
  });

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  
    const nuevosUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    nuevosUsuarios.push(registerData);
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  
    // 🔐 Iniciar sesión automáticamente
    login({
      id: nuevosUsuarios.length, // o algún otro identificador
      nombre: registerData.nombre,
      apellido: registerData.apellido,
      email: registerData.email,
      fecha_nacimiento: registerData.fecha_nacimiento,
      foto: "", // si no hay foto por ahora
      fecha_registro: new Date().toISOString(),
    });
  
    navigate('/'); // 👈 Redirigir al home
  };
  
  

  return (
    <div className='general'>
      <div className='contenedor'> 
        <div className="barraCambio">
          <button 
          className={!isRegistering ? 'activo' : 'inactivo'} 
          onClick={() => setIsRegistering(false)}
          >Acceder</button>
          <button 
            className={isRegistering ? 'activo' : 'inactivo'} 
            onClick={() => setIsRegistering(true)}
          >Registrarse</button>
        </div>      
        <div className={`contenedorPestañas ${isRegistering ? 'moverIzquierda' : 'moverDerecha'}`}>
          <div className='contenedorLogin'>
            <form onSubmit={handleSubmit}>
              <div>
                <div className='contenedorSelector'>
                  <p>Correo electrónico</p>
                  <select className='selector'
                    onChange={(e) => {
                      const selected = userData.find(p => p.nombre === e.target.value);
                      if (selected) {
                        setEmail(selected.email);
                        setPassword(selected.contraseña);}}}>
                      <option>Perfiles Ejemplo</option>
                    {userData.map((perfil, i) => (
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
              <button className='botonAcceso' type="submit">Acceder</button>
              <div className='opciones'>
                <Link>Restablecer contraseña</Link>
              </div>
            </form>        
          </div>
          <div className='contenedorRegistro'>
            <form onSubmit={handleRegisterSubmit}>
              <div>
                <p>Nombre</p>
                <input
                  className='inputUsuario'
                  type="text"
                  name="nombre"
                  value={registerData.nombre}
                  onChange={handleRegisterChange}
                  placeholder="Nombre"
                  required
                />
              </div>
                <div>
                  <p>Apellido</p>
                  <input
                    className='inputUsuario'
                    type="text"
                    name="apellido"
                    value={registerData.apellido}
                    onChange={handleRegisterChange}
                    placeholder="Apellido"
                    required
                  />
                </div>
                <div>
                  <p>Correo electrónico</p>
                  <input
                    className='inputUsuario'
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div>
                  <p>Contraseña</p>
                  <input
                    className='inputUsuario'
                    type="password"
                    name="contraseña"
                    value={registerData.contraseña}
                    onChange={handleRegisterChange}
                    placeholder="**********"
                    required
                  />
                </div>
                <div>
                  <p>Fecha de nacimiento</p>
                  <input
                    className='inputUsuario'
                    type="date"
                    name="fecha_nacimiento"
                    value={registerData.fecha_nacimiento}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <button type="submit">Crear cuenta</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
