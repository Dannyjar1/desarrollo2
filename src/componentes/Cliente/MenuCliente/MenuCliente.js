import React, { Component } from 'react'
import { Input, Menu, MenuItem, Image, Segment} from 'semantic-ui-react'
import { NavLink, whithRoter } from 'react-router-dom'
import './MenuCliente.scss'

export class MenuCliente extends Component {

  state = { activeItem: 'inicio'}
  handleItemClick = (e, { name})=> {
    this.setState({activeItem:name})
  }

  render(){
    const {activeItem}= this.state
  return (
    <div>
    <Segment inverted>
    <Menu inverted secondary>
      <MenuItem >
      <Image  src='https://enlinea2.uide.edu.ec/pluginfile.php/1/theme_moove/logo/1668202577/NUEVO%20LOGO_MOODLE.png' 
        size='small'
        as ={ NavLink} to=''
        active={activeItem === 'inicio'}
        onClick = {this.handleItemClick}
        /> 
      </MenuItem>
      <Menu.Item 
        as ={ NavLink} to=''
        name='Inicio'
        active={activeItem === 'inicio'}
        onClick = {this.handleItemClick}
      />
      <Menu.Item
        as ={ NavLink} to=''
        name='Investigaciones'
        active={activeItem === 'investigacion'}
        onClick = {this.handleItemClick}
      />
      <Menu.Item
        as ={ NavLink} to=''
        name='Autores'
        active={activeItem === 'autores'}
        onClick = {this.handleItemClick}
      />
      <Menu.Item
        as ={ NavLink} to=''
        name='Contactos'
        active={activeItem === 'contactos'}
        onClick = {this.handleItemClick}
      />
      <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Item
        as ={ NavLink} to='/Admin'
        name='Login'
        active={activeItem === 'admin'}
        onClick = {this.handleItemClick}
      />
      </Menu.Menu>
    </Menu>
    </Segment>
    </div>
   )
  } 
}