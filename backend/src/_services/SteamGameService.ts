import axios, { AxiosResponse } from "axios";
import { DTOParser } from "../_dataAccess/_util/DTOParser";
import { SteamGame } from "../_domain/SteamGame";

export interface ISteamGameService {
  getSteamGame(appId: string): Promise<SteamGame>
}

export class SteamGameService {
  async getGameResponse(appId: string): Promise<any> {
    const url = "https://store.steampowered.com/api/appdetails?appids=" + appId;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }

  async getSteamGame(appId: string): Promise<SteamGame> {
    const data = await this.getGameResponse(appId);
    const game = DTOParser.parseGame(appId, data[appId]);
    return game;
  }
}
