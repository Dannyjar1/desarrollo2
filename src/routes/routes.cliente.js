import {ClienteLayout } from '../layouts'
import { Home, Mensaje, Denuncias, FormularioDenuncia, MisDenuncias } from '../page/Cliente'
import {LoginAdmin} from '../page/Admin/LoginAdmin'
import { RegistroForm } from '.././componentes/Admin/RegistroForm/RegistroForm';


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
        component: RegistroForm,
    },
    
    {
        path:"/home",
        layout: ClienteLayout,
        component: Home,
    },

    {
        path:"/denuncias",
        layout: ClienteLayout,
        component: Denuncias,
    },
    {
        path:"/formulariodenuncia",
        layout: ClienteLayout,
        component: FormularioDenuncia,
    },
    {
        path:"/misdenuncias",
        layout: ClienteLayout,
        component: MisDenuncias
    }
];

export default routesCliente