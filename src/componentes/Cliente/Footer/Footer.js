import React from 'react'
import { Menu, Input, Image, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export function Footer() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary >
          <Menu.Item disabled>
          </Menu.Item>
          <Menu.Item as="h5">
            (c) Proyecto desarrollado by tu papi
          </Menu.Item>
          <Menu.Item position='right'>
            <Input icon={{ name: 'search', link: true }} placeholder='Buscar...' />
          </Menu.Item>
          <Menu.Item as="h6">
            Build 2023
          </Menu.Item>

        </Menu>
      </Segment>
    </div>
  )

}