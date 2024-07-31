import { IResponsiveRender } from "./iresponsiverender";
import { Platform } from "./platform";


export class Mobile implements IResponsiveRender {
    private static instance: Mobile;

    private constructor () {
        //Privado para que solo pueda ser llamado dentro de clase
    }

    public static getInstance(): Mobile {
        if (!Mobile.instance){ 
            Mobile.instance = new Mobile();
        }
        return Mobile.instance;
    }

    responsiveRender(dispositivo: Platform){
        //Implementación para el render que aplicará el móbil
    }
}