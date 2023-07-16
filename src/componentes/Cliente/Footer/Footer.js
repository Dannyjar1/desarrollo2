import React from 'react'
import { Menu, Input,Image, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export function Footer() {
  return (
    <div>
    <Segment inverted>
    <Menu inverted secondary >
        <Menu.Item disabled> 
        <Image  src='https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/331102301_538442014783121_8543833856339854948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFFEKjNhXPQoPJbTQraONembQQmQptIXHBtBCZCm0hccEA2K0oKq45xzXgEwbGpGhIy8bMekERWALXMYXtdSp7q&_nc_ohc=elRfQkwA480AX9YRbLa&_nc_ht=scontent.fuio13-1.fna&oh=00_AfC4bv1S6ggHx0pfiQYNSVLdr1SHo_rY_7waOtDCi_tOTA&oe=63F2F8D6' 
         size='tiny' circular
        as ={ NavLink} to='https://github.com/KarlaConde'/>
        </Menu.Item>
        <Menu.Item as= "h5"> 
        (c) Proyecto desarrollado by Danny Jaramillo
        </Menu.Item>
        <Menu.Item position='right'>
            <Input  label='Suscribete =>'></Input>
        </Menu.Item>
        <Menu.Item as= "h6">
            Building 2023
        </Menu.Item>

    </Menu>
    </Segment>
    </div>
  )

}