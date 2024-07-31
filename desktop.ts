import { IResponsiveRender } from "./iresponsiverender";
import { Platform } from "./platform";

export class Desktop implements IResponsiveRender {
    private static instance: Desktop;

    private constructor () {
        //Privado para que solo pueda ser llamado dentro de clase
    }

    public static getInstance(): Desktop {
        if (!Desktop.instance){ 
            Desktop.instance = new Desktop();
        }
        return Desktop.instance;
    }

    responsiveRender(dispositivo: Platform){
        //Implementación para el render que aplicará el móbil
    }
}