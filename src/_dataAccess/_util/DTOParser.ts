import { SteamGame } from "../../_domain/SteamGame";
import { SteamUser } from "../../_domain/SteamUser";

export class DTOParser {
    static parseUser(steamid: string, response: SteamUserDTO.IRootObject): SteamUser {
        let games = [];

        for (let game of response.response.games) {
            games.push(game.appid)
        }
        //response.response.games.map((x) => {games.push(x.appid)})

        return new SteamUser(steamid, games);
    }

    static parseGame(appid: string, gameResponse: SteamGameDTO.IRootObject): SteamGame {
        return new SteamGame(appid, gameResponse.data.name);
    }
}