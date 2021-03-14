import {SteamGame} from "../../_domain/SteamGame";

export class GameRequest implements IHttpRequest{
    readonly URL;
    readonly Method;

    constructor(private appid: string) {
        this.URL = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
        this.Method = HttpMethod.GET;
    }
}