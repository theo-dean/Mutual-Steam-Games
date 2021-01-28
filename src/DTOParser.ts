import {SteamUser} from "./SteamUser";

export class DTOParser {
    static parseUser(steamid: string, response: SteamUserDTO.RootObject): SteamUser{
        let games = [];

        for (let game of response.response.games){
            games.push(game.appid)
        }

        return new SteamUser(steamid, games);
    }

    static parseGame(response: )
}