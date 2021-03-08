import { SteamUser } from "../_domain/SteamUser";
import axios, { AxiosResponse } from "axios";
import { DTOParser } from "./_util/DTOParser";
//TODO: Refactor this out
export class SteamUserService {


  private async getUserResponse(apiKey:string, steamid: string): Promise<any> {
    const url =
      "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" +
      apiKey +
      "&steamid=" +
      steamid +
      "&format=json";
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }

  async getUser(apiKey: string, steamid: string): Promise<SteamUser> {
    const response = await this.getUserResponse(apiKey, steamid);
    return DTOParser.parseUser(steamid, response);
  }
}
