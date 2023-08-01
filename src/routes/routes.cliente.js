import {ClienteLayout } from '../layouts'
import { Home, Mensaje } from '../page/Cliente'
import {LoginAdmin} from '../page/Admin/LoginAdmin'
import { RegistroForm } from '../componentes/Admin/RegistroForm';

/* ,Denuncia, AgregarDenuncia,Categoria,VerCategoria */

const routesCliente = [
    {
        path: "/",
        layout: ClienteLayout,
        component: Mensaje,
    },
    
    {
        path: "/login",
        layout: ClienteLayout,
        component: LoginAdmin,
    },

    {
        path:"/registro",
        layout: ClienteLayout,
        component: RegistroForm
    },
    
    {
        path:"/home",
        layout: ClienteLayout,
        component: Home
    }
];

export default routesCliente