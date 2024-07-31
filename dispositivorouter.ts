import { Platform } from "./platform";
import { IResponsiveRender } from "./iresponsiverender";

export class DispositivoRouter {
    private static instance: DispositivoRouter

    private constructor() {
        //Constructor privado para prevenir instanciación
    } 

    public static getInstance(): DispositivoRouter {
        if (!DispositivoRouter.instance){
            //Checamos que no se haya creado una instancia previa y la creamos
            DispositivoRouter.instance = new DispositivoRouter();
        }
        return DispositivoRouter.instance;
    }

    responsiveRender(dispositivoRender: IResponsiveRender, dispositivo: Platform){
        //Acá usamos la interface y también la clase de plataforma como tal

        //Acá aplicamos injection para llamar la función, y de un modo, facilitar el render responsivo y poder
        //aplicar ciertas funciones específicas
        dispositivoRender.responsiveRender(dispositivo);
    }

}