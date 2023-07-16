import {ClienteLayout } from '../layouts'
import { Mensaje } from '../page/Cliente'

/* ,Denuncia, AgregarDenuncia,Categoria,VerCategoria */

const routesCliente = [
    {
        path: "/",
        layout: ClienteLayout,
        component: Mensaje,
    },
    
    
];

export default routesCliente