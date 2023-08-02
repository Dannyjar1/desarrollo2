import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginForm.scss";

export function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Nuevo estado
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true); 

    try {
      const response = await axios.post('https://back-barrios-462cb6c76674.herokuapp.com/auth/login', {
        email: loginEmail,
        password: loginPassword
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);

        // Ocultar "Iniciando sesión..."
        setIsLoggingIn(false);

        // Mostrar notificación de éxito
        toast.success('Inicio de sesión exitoso', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Redirigir a la página de bienvenida u otra ruta autorizada
        navigate('/home');
      } else {
        // Mostrar notificación de error si la respuesta del servidor no es 200
        setIsLoggingIn(false); // Ocultar "Iniciando sesión..."
        toast.error('Error en el inicio de sesión', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      // Mostrar notificación de error en caso de error en la solicitud
      setIsLoggingIn(false); // Ocultar "Iniciando sesión..."
      toast.error('Error en la solicitud', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log('Error en la solicitud:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="card container1">
        <h1 className="titleCard">Iniciar sesión</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <input
              type="email"
              id="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="submarine-input"
            />
            <label htmlFor="loginEmail" className="submarine-label">
              Correo electrónico:
            </label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              className="submarine-input"
            />
            <label htmlFor="loginPassword" className="submarine-label">
              Contraseña:
            </label>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <button className="botonSubmit waves-effect waves-light" type="submit">
                Iniciar sesión
              </button>
            </div>
          </div>
          <p className="center-align mt-3">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </div>
      {isLoggingIn && ( // Mostrar "Iniciando sesión..." si isLoggingIn es true
        <div className="logging-in-overlay">
          <p>Iniciando sesión...</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default LoginForm;