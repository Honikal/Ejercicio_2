import { Request, Response } from 'express';
import { UAParser } from 'ua-parser-js';
import { DispositivoRouter } from './dispositivorouter';
import { Platform } from './platform';
import { IResponsiveRender } from './iresponsiverender';
import { Mobile } from './mobile';
import { Tablet } from './tablet';
import { Desktop } from './desktop';

//Creamos un struct sencillo donde guardamos los datos
const plataformasRenderizado: { [key: string]: IResponsiveRender} = {};

plataformasRenderizado['mobile'] = Mobile.getInstance();
plataformasRenderizado['tablet'] = Tablet.getInstance();
plataformasRenderizado['desktop'] = Desktop.getInstance();

//De acuerdo a información, facilita el poder tener información del dispositivo del usuario
export function responsiveRendering(req: Request, res: Response){
    //Nosotros seguimos utilizando la base de responsiveRendering, sin embargo, también tenemos que tener en cuenta
    //que se debe de tomar en cuenta ciertas funciones de acuerdo al response o dispositivo

    try {
        //Activamos la información para detectar información del usuario
        const uaParser = new UAParser();
        const usuarioAgente = req.headers['user-agent'] || '';
        const uaResult = uaParser.setUA(usuarioAgente).getResult();

        const ua = usuarioAgente;
        const browser = { name: uaResult.browser.name, version: uaResult.browser.version };
        const engine = { name: uaResult.engine.name, version: uaResult.engine.version };
        const os = { name: uaResult.os.name, version: uaResult.os.version };
        const device = { vendor: uaResult.device.vendor, model: uaResult.device.model, type: uaResult.device.type }

        //Validación si es necesario
        if (!ua || !browser || !engine || !os || !device){
            res.status(400).json({ error: 'Missing agent information' });
            return;
        }

        //Creamos el objeto plataforma según sea necesario
        const platformInfo = new Platform(ua, browser, engine, os, device);

        //Finalmente, creamos el responsive render de modo que la página esté en un modo estable para el usuario
        DispositivoRouter.getInstance().responsiveRender(plataformasRenderizado[platformInfo.device.type], platformInfo);

    } catch (error) {
        res.status(500).json({ error: 'Error loading service' });
    }

}