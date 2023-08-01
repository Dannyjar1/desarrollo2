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
          <Menu.Item className="copy" as="h5" >
            Build 2023 (c) Proyecto desarrollado por yop
          </Menu.Item>
          {/* <Menu.Item  position='right'>
            <Input size='small' className="search" icon={{ name: 'search', link: true }} placeholder='Buscar...' />
          </Menu.Item> */}
          

        </Menu>
      </Segment>
    </div>
  )

}