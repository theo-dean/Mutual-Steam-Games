import axios, { AxiosResponse } from "axios";
import { DTOParser } from "./_dataAccess/_util/DTOParser";
import { SteamGame } from "./_domain/SteamGame";

export class SteamGameService {
  private async getGameResponse(appid: string): Promise<any> {
    const url = "https://store.steampowered.com/api/appdetails?appids=" + appid;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }

  public async getGame(appid: string): Promise<SteamGame> {
    const data = await this.getGameResponse(appid);
    const game = DTOParser.parseGame(appid, data[appid]);
    return game;
  }
}
