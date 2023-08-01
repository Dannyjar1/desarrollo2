import React, { Component } from 'react'
import { Input, Menu, MenuItem, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export class HeaderCliente extends Component {

  state = { activeItem: 'inicio'}
  handleItemClick = (e, { name})=> {
    this.setState({activeItem:name})
  }

  render(){
    const {activeItem}= this.state
  return (
    <div>
    <Segment inverted >
    <Menu inverted secondary>
  
      <MenuItem icon='bullhorn' 
      size='big'
        as ={ NavLink} to='/'
        active={activeItem === ''}
        onClick = {this.handleItemClick}
        /> 
      <Menu.Item
        as ={ NavLink} to='/Admin'
        name='Login'
        active={activeItem === 'admin'}
        onClick = {this.handleItemClick}
      />
      <Menu.Item
        as ={ NavLink} to='/Admin'
        name='Logout'
        active={activeItem === 'admin'}
        onClick = {this.handleItemClick}
      />
      <Menu.Item position='right'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      
      </Menu>
      </Segment>
    
    </div>
   )
  } 
}










