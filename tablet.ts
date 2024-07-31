import { IResponsiveRender } from "./iresponsiverender";
import { Platform } from "./platform";

export class Tablet implements IResponsiveRender {
    private static instance: Tablet;

    private constructor () {
        //Privado para que solo pueda ser llamado dentro de clase
    }

    public static getInstance(): Tablet {
        if (!Tablet.instance){ 
            Tablet.instance = new Tablet();
        }
        return Tablet.instance;
    }

    responsiveRender(dispositivo: Platform){
        //Implementación para el render que aplicará el móbil
    }
}