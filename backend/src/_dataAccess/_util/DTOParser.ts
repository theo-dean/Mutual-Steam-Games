import { SteamGame } from "../../_domain/SteamGame";
import { SteamUser } from "../../_domain/SteamUser";
import { SteamUserDTO } from "./SteamUserDTO";
import { SteamGameDTO } from "./SteamGameDTO";
//TODO: ?????
export class DTOParser {
  static parseUser(
    steamid: string,
    response: SteamUserDTO.IRootObject
  ): SteamUser {
    let games = [];

    for (let game of response.response.games) {
      games.push(game.appid);
    }
    return new SteamUser(steamid, games);
  }

  static parseGame(
    appid: string,
    gameResponse: SteamGameDTO.IRootObject
  ): SteamGame {
    return new SteamGame(appid, gameResponse.data.name);
  }
}

export type Parseable = SteamGame | SteamUser;
