import React from 'react'
import { Footer, Header,Bienvenida,AgregarDenuncia } from  '../../componentes/Cliente'

export function Home() {
  return (
    <div> 
    
        <Header/>
        <AgregarDenuncia/>
          <Bienvenida/>
        <Footer/>
    </div>
  )
}