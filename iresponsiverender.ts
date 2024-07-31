import { Platform } from "./platform";

export interface IResponsiveRender {
    //Creamos la interface que se encargará de aplicar el responsive Render
    responsiveRender(dispositivoAgente: Platform): void;
}