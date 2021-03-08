import {SteamGame} from "../../_domain/SteamGame";

export class GameRequest implements IRequest<SteamGame>{
    readonly URL;

    constructor(private appid: string) {
        this.URL = "https://store.steampowered.com/api/appdetails?appids=" + appid;
    }
}