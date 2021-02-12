export class SteamGame {
    appid: string;
    name: string | undefined;

    constructor(appid: string){
        this.appid = appid;
    }
}