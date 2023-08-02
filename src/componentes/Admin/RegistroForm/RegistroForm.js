import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaUser, FaAddressCard, FaPhone, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import * as yup from "yup";
import "./RegistroForm.scss";

export function RegistroForm () {
  const validationSchema = yup.object().shape({
    nombreCompleto: yup.string().required("El nombre completo es requerido.").min(6, "El nombre completo debe tener al menos 6 caracteres.").max(255, "El nombre completo no puede tener más de 255 caracteres."),
    cedula: yup.string().required("La cédula es requerida.").min(6, "La cédula debe tener al menos 6 caracteres.").max(10, "La cédula no puede tener más de 10 caracteres."),
    numTelefono: yup.string().required("El número de teléfono es requerido.").min(6, "El número de teléfono debe tener al menos 6 caracteres.").max(10, "El número de teléfono no puede tener más de 10 caracteres."),
    email: yup.string().required("El email es requerido.").email("Ingresa un email válido.").min(6, "El email debe tener al menos 6 caracteres.").max(255, "El email no puede tener más de 255 caracteres."),
    password: yup.string().required("La contraseña es requerida.").min(6, "La contraseña debe tener al menos 6 caracteres.")
  });

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    numTelefono: "",
    email: "",
    password: "",
    photo: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const selectedFile = files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedFile
    }));
  };

  const handleRemovePhoto = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: null
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const url = "https://back-barrios-462cb6c76674.herokuapp.com/auth/register";
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await axios.post(url, data);
      console.log("Registro exitoso:", response.data);
      toast.success("¡Registro exitoso!");
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error en el registro:", error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Error en el registro. Por favor, inténtalo de nuevo más tarde.");
        }
      }
    }
  };

  return (
    <div className="page-container">
      <div className="card container1">
        <h1 className="titleCard">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="icon-wrapper">
              <FaUser className="input-icon" />
            </div>
            <label
              htmlFor="nombreCompleto"
              className={formData.nombreCompleto ? "active" : "submarine-label"}
            >
              Nombre Completo:
            </label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
              className="submarine-input"
            />
            {errors.nombreCompleto && (
              <div className="error-message">{errors.nombreCompleto}</div>
            )}
          </div>
          <div className="input-container">
            <div className="icon-wrapper">
              <FaAddressCard className="input-icon" />
            </div>
            <label
              htmlFor="cedula"
              className={formData.cedula ? "active" : "submarine-label"}
            >
              Cédula:
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              required
              className="submarine-input"
            />
            {errors.cedula && (
              <div className="error-message">{errors.cedula}</div>
            )}
          </div>
          <div className="input-container">
            <div className="icon-wrapper">
              <FaPhone className="input-icon" />
            </div>
            <label
              htmlFor="numTelefono"
              className={formData.numTelefono ? "active" : "submarine-label"}
            >
              Número de Teléfono:
            </label>
            <input
              type="text"
              id="numTelefono"
              name="numTelefono"
              value={formData.numTelefono}
              onChange={handleChange}
              required
              className="submarine-input"
            />
            {errors.numTelefono && (
              <div className="error-message">{errors.numTelefono}</div>
            )}
          </div>
          <div className="input-container">
            <div className="icon-wrapper">
              <FaEnvelope className="input-icon" />
            </div>
            <label
              htmlFor="email"
              className={formData.email ? "active" : "submarine-label"}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="submarine-input"
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="input-container">
            <div className="icon-wrapper">
              <FaLock className="input-icon" />
            </div>
            <label
              htmlFor="password"
              className={formData.password ? "active" : "submarine-label"}
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="submarine-input"
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className="input-container">
        <div className="icon-wrapper">
          <FaImage className="input-icon" />
        </div>
        <label
          htmlFor="photo"
          className={formData.photo ? "active" : "submarine-label"}
        >
          Foto de perfil:
        </label>
        <div className="file-field input-field">
          {formData.photo ? (
            <div className="photo-container">
              {/* Muestra el nombre del archivo seleccionado */}
              <span>{formData.photo.name}</span>
              <button
                type="button"
                className="remove-photo-button"
                onClick={handleRemovePhoto}
              >
                Eliminar foto
              </button>
            </div>
          ) : (
            <div className="botonSubmit">
              {/* Actualiza para mostrar solo el nombre del archivo seleccionado */}
              <span>Seleccionar foto</span>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>
          )}
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>

          <button className="botonSubmit" type="submit">
            Registrarse
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistroForm;
