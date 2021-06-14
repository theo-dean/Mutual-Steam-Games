import {SteamUser} from "../../_domain/SteamUser";

export class UserRequest {
    public readonly URL: string;

    constructor(apiKey: String, steamid: string){
         this.URL =
            `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?
            key=${apiKey}
            &steamid=${steamid}
            &format=json`;
    }
}