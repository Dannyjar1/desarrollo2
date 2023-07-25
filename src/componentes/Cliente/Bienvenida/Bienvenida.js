import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './bienvenida.scss';

export function Bienvenida() {
  return (
    <div className='back'>
      <Grid columns={2} relaxed='very'>
        <Grid.Column className='texto'>
          <p className='contenedor' >
            En esta plataforma, puedes realizar denuncias sobre situaciones irregulares, delitos o violaciones a la ley que hayas presenciado en tu comunidad. Nuestra misión es fomentar la participación ciudadana y contribuir a la seguridad, el orden social y el bienestar de nuestra comunidad.
          </p>
          <p className='contenedor' >
            Creemos firmemente en el poder de los ciudadanos para generar un cambio positivo y mejorar la calidad de vida en nuestro entorno. Al realizar una denuncia, estás desempeñando un papel activo en la prevención y combate de la delincuencia, así como en la promoción de un ambiente seguro y justo para todos.
          </p>
          <p className='contenedor' >
            ¿No tienes una cuenta? <a href='/registro'>Registrate</a> para continuar.
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}
