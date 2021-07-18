import axios from "axios";
import { DTOMapper } from "../_dataAccess/_util/DTOMapper";
import { SteamGame } from "../_domain/SteamGame";
import {SteamGameDTO} from "../_dataAccess/_util/SteamGameDTO";

export interface ISteamGameService {
  getSteamGame(appId: string): Promise<SteamGame>
}

export class SteamGameService implements ISteamGameService{
  async getSteamGame(appId: string): Promise<SteamGame> {
    const responseData = await this.getGameResponse(appId);
    const game = DTOMapper.parseGame(appId, responseData[appId]); // TODO: Is the DTO necessary?
    return game;
  }

  async getGameResponse(appId: string): Promise<any> {
    const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
    const response = await axios.get(url);
    const data = await response.data as SteamGameDTO.IRootObject;
    return data;
  }
}
