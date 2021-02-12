import { SteamGame } from "./SteamGame";
import {SteamUser} from "./SteamUser";

export class DTOParser {
    static parseUser(steamid: string, response: SteamUserDTO.IRootObject): SteamUser{
        let games = [];

        for (let game of response.response.games){
            games.push(game.appid)
        }

        return new SteamUser(steamid, games);
    }

    static parseGame(appid: string, response: SteamGameDTO.RootObject): SteamGame {
        //console.log(response.appid.data.name)
        return new SteamGame(appid);
    }
}