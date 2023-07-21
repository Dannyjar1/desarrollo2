import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegistroForm.scss"; // Reutilizar el archivo de estilos

export function RegistroForm() {
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [foto, setFoto] = useState(null);
  const [registroEmail, setRegistroEmail] = useState('');
  const [registroPassword, setRegistroPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro COOREGIR !!!!

    navigate('/bienvenida');
  };

  return (
    <div className="cabecera1">
      <div className="cabecera">
        <h2 className="center-align">Registro</h2>
        <form onSubmit={handleRegistrationSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="cedula">Cédula:</label>
              <input
                type="text"
                className="validate"
                id="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="telefono">Número de teléfono:</label>
              <input
                type="tel"
                className="validate"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="file-field input-field">
              <div className="btn">
                <span>Foto</span>
                <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} required />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="registroEmail">Correo electrónico:</label>
              <input
                type="email"
                className="validate"
                id="registroEmail"
                value={registroEmail}
                onChange={(e) => setRegistroEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="registroPassword">Contraseña:</label>
              <input
                type="password"
                className="validate"
                id="registroPassword"
                value={registroPassword}
                onChange={(e) => setRegistroPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <button className="btn waves-effect waves-light" type="submit">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroForm;