//import routesAdmin from "./routes.admin";
import routesCliente from "./routes.cliente";

/* agregamos la pagina 404*/
import {Error404} from "../page"
import {BasicLayout} from "../layouts"
/*

cuando nosotros queremos exportar los componenten que hemor utilizado 
[ {},{}]
es que nos retorne el contenido especifico de cada componente 
el operador ... 

*/

const routes =[  ...routesCliente, {
    layout: BasicLayout, 
    component: Error404
} ];

export default routes;
