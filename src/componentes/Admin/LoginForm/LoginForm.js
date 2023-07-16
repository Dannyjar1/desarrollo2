import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginForm() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      
      // Lógica de inicio de sesión COOREGIR !!!!
  
      navigate('/bienvenida');
    };
  
    return (

      
      <div className="container">
        <h1 className="center-align mt-5">Inicio de sesión</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="loginEmail">Correo electrónico:</label>
              <input
                type="email"
                className="validate"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="loginPassword">Contraseña:</label>
              <input
                type="password"
                className="validate"
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <button className="btn waves-effect waves-light" type="submit">
                Iniciar sesión
              </button>
            </div>
          </div>
          <p className="center-align mt-3">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    );
  }

export default LoginForm;
