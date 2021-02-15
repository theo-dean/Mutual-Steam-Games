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

    static parseGame(appid: string, response: SteamGameDTO.IRootObject): SteamGame {
        console.log(response)
        return new SteamGame(appid, "placeholder");
    }
}