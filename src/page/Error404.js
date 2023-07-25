import React from 'react';

export function Error404() {
  const errorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
  };

  const errorHeadingStyle = {
    fontSize: '3rem',
    color: '#ff0000',
    marginBottom: '1rem',
  };

  const errorMessageStyle = {
    fontSize: '1.5rem',
    color: '#555555',
  };

  return (
    <div style={errorContainerStyle}>
      <h1 style={errorHeadingStyle}>Error 404</h1>
      <p style={errorMessageStyle}>La página que estás buscando no se encontró.</p>
    </div>
  );
}
