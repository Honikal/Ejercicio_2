export class Platform {
    private _ua: string                                                   //User Agent
    private _browser: { name: string, version: string }                   //Browser   
    private _engine:  { name: string, version: string }                   //Engine    
    private _os:      { name: string, version: string }                   //OS 
    private _device:  { vendor?: string, model?: string, type?: string }  //Device    

    constructor(
        ua: string,
        browser: { name: string, version: string },
        engine: { name: string, version: string },
        os: { name: string, version: string } ,
        device: { vendor?: string, model?: string, type?: string } 
    ){
        this._ua = ua;
        this._browser = browser;
        this._engine = engine;
        this._os = os;
        this._device = device;
    }

    get ua(): string {
        return this._ua;
    }

    set ua(value: string) {
        this._ua = value;
    }

    get browser(): { name: string, version: string } {
        return this._browser;
    }

    set browser(value: { name: string, version: string }) {
        this._browser = value;
    }

    get engine(): { name: string, version: string } {
        return this._engine;
    }

    set engine(value: { name: string, version: string }) {
        this._engine = value;
    }

    get os(): { name: string, version: string } {
        return this._os;
    }

    set os(value: { name: string, version: string }) {
        this._os = value;
    }

    get device(): { vendor?: string, model?: string, type?: string }  {
        return this._device;
    }

    set device(value: { vendor?: string, model?: string, type?: string } ) {
        this._device = value;
    }

}