import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Footer, HeaderCliente,Bienvenida,AgregarDenuncia } from  '../../componentes/Cliente'

export function Home() {


  
  return (
    <div> 
        <HeaderCliente/>
        <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            

<Menu.Item 
        as ={ NavLink} to='/home'
        name='Inicio'
        
      />
      <Menu.Item
        as ={ NavLink} to='/formulariodenuncia'
        name='Agregar Denuncia '
        
      />
      <Menu.Item
        as ={ NavLink} to='/misdenuncias'
        name='Mis Denuncias'
        
      />
      <Menu.Item
        as ={ NavLink} to='/'
        name='Contactos'
        
      />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          <AgregarDenuncia/> 
          </Segment>
        </Grid.Column>
      </Grid>
                 
        <Footer/>
    </div>
  )
}
