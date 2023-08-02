import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaMailBulk, FaKey } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.scss';

export function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);

    try {
      const response = await axios.post('https://back-barrios-462cb6c76674.herokuapp.com/auth/login', {
        email: loginEmail,
        password: loginPassword,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);

        setIsLoggingIn(false);

        toast.success('Inicio de sesión exitoso', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Esperar 3 segundos antes de redirigir a la página /home
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        setIsLoggingIn(false);
        toast.error('Error en el inicio de sesión. Por favor, inténtalo de nuevo más tarde.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      setIsLoggingIn(false);

      if (error.response && error.response.data && error.response.data.error) {
        // Mostrar el mensaje específico del backend si está presente
        toast.error(error.response.data.error, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        // Si no hay mensaje específico del backend, mostrar el mensaje genérico
        toast.error('Error en la solicitud. Por favor, inténtalo de nuevo más tarde.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      console.log('Error en la solicitud:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="card container1">
        <h1 className="titleCard">Iniciar sesión</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <label htmlFor="loginEmail" className="submarine-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="submarine-input"
            />
            <FaMailBulk className="icon email" />
          </div>
          <div className="input-container">
            <label htmlFor="loginPassword" className="submarine-label">
              Contraseña
            </label>
            <input
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              className="submarine-input"
            />
            <FaKey className="icon password" />
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
      {isLoggingIn && (
        <div className="logging-in-overlay">
          <p>Iniciando sesión...</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default LoginForm;