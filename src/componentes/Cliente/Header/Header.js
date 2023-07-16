import React from 'react'
import './Header.scss'

export function Header() {
  return (
    <div>
        <header className='header'>
            <div className='header__primary'>
                <span className='header__primary'>Denuncias de Barrios </span>
            </div>
            <div className='primario' >
                <h1>
                    <span className='primario__main'>Un sitio web para tí </span>
                </h1>
                <a href='http://localhost:3000/agregar-investigacion' className='boton1'>
                    Realiza tu denuncia aquí
                </a>
            </div>
        </header>
    </div>
  )
}