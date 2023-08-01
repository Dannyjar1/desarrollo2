import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import "./RegistroForm.scss";

export function RegistroForm () {
  const validationSchema = yup.object().shape({
    nombreCompleto: yup
      .string()
      .required("El nombre completo es requerido.")
      .min(6, "El nombre completo debe tener al menos 6 caracteres.")
      .max(255, "El nombre completo no puede tener más de 255 caracteres."),
    cedula: yup
      .string()
      .required("La cédula es requerida.")
      .min(6, "La cédula debe tener al menos 6 caracteres.")
      .max(10, "La cédula no puede tener más de 10 caracteres."),
    numTelefono: yup
      .string()
      .required("El número de teléfono es requerido.")
      .min(6, "El número de teléfono debe tener al menos 6 caracteres.")
      .max(10, "El número de teléfono no puede tener más de 10 caracteres."),
    email: yup
      .string()
      .required("El email es requerido.")
      .email("Ingresa un email válido.")
      .min(6, "El email debe tener al menos 6 caracteres.")
      .max(255, "El email no puede tener más de 255 caracteres."),
    password: yup
      .string()
      .required("La contraseña es requerida.")
      .min(6, "La contraseña debe tener al menos 6 caracteres.")
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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
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
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          toast.error(error.response.data.error);
        } else {
          toast.error(
            "Error en el registro. Por favor, inténtalo de nuevo más tarde."
          );
        }
      }
    }
  };

  return (
    <div className="page-container">
      <div className="card container1"> {/* Wrap the form in a card */}
        <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="nombreCompleto" className="submarine-label">
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
        <div className="input-field">
          <label htmlFor="cedula" className="submarine-label">
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
        <div className="input-field">
          <label htmlFor="numTelefono" className="submarine-label">
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
        <div className="input-field">
          <label htmlFor="email" className="submarine-label">
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
        <div className="input-field">
          <label htmlFor="password" className="submarine-label">
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
        <div className="file-field input-field">
          <div className="btn submarine-btn">
            <span>Foto</span>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn submarine-btn" type="submit">
            Registrar
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegistroForm;