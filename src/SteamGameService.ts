import axios, {AxiosResponse} from "axios";
import { DTOParser } from "./DTOParser";
import {SteamGame} from "./SteamGame"

export class SteamGameService {
    private async getGameResponse(appid: string): Promise<any> {
        const url = "https://store.steampowered.com/api/appdetails?appids=" + appid;
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    }

    public async getGame(appid: string): Promise<SteamGame> {
        const data = await this.getGameResponse(appid);
        console.log(data);
        const game = DTOParser.parseGame(appid, data);
        return game;
    }
}