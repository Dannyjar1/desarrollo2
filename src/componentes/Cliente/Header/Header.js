import React from 'react';
import './Header.scss';
import { Icon } from 'semantic-ui-react';

export function Header() {
    return (
        <header className='header'>
            <div className='header__primary'>
                <Icon name='bullhorn' size='small' />
                <span className='header__primary-text'>Denuncia Loja</span>
            </div>
            <div className='primario'>
                <a href='/login' className='boton1'>
                    Iniciar Sesion
                </a>
                <a href='/registro' className='boton1'>
                    Registrarse
                </a>
            </div>
            {/* <div className='secundario'>

            </div> */}
        </header>
    );
}
