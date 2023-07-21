import React from 'react'
import { Divider, Grid,Image, Segment, Button } from 'semantic-ui-react'
import { NavLink, whithRoter } from 'react-router-dom'
import './bienvenida.scss'

export function Bienvenida (){
    
    return (
    <div className='back'>
        
    <Grid columns={2} relaxed='very'>
        <Grid.Column>
            <Image className='mover'  src='https://i0.wp.com/libertad-oaxaca.info/wp-content/uploads/2017/02/denuncia-ciudadana2.jpg' 
                
                as ={ NavLink} to='/'
                
            />
        </Grid.Column>

      <Grid.Column className='texto' >
            <p className='contenedor' align="left">
              En esta plataforma, puedes realizar denuncias sobre situaciones irregulares, delitos o violaciones a la ley que hayas presenciado en tu comunidad. Nuestra misión es fomentar la participación ciudadana y contribuir a la seguridad, el orden social y el bienestar de nuestra comunidad.
            </p>
            <p className='contenedor' align="left">
              Creemos firmemente en el poder de los ciudadanos para generar un cambio positivo y mejorar la calidad de vida en nuestro entorno. Al realizar una denuncia, estás desempeñando un papel activo en la prevención y combate de la delincuencia, así como en la promoción de un ambiente seguro y justo para todos.
            </p>
            <Button as ={ NavLink} to='/login' className='boton1'>
                    Login
            </Button>
            
      </Grid.Column>
      </Grid>
      
  </div>
    )
  }

