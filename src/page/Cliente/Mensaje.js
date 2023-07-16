import React from 'react'
import { Bienvenida, Footer, Header } from  '../../componentes/Cliente'

export function Mensaje() {
  return (
    <div> 
        
         <Header/>
         <h1>Bienvenida</h1>
          <Bienvenida/>
         <Footer/>
    </div>
  )
}