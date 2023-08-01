import React from 'react'
import { Footer, HeaderCliente,Bienvenida,AgregarDenuncia } from  '../../componentes/Cliente'

export function Home() {
  return (
    <div> 
    

        <HeaderCliente/>
        <AgregarDenuncia/>          
        <Footer/>
    </div>
  )
}