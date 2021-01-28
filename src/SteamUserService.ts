import {SteamUser} from "./SteamUser";
import axios, {AxiosResponse} from "axios";
import { DTOParser } from "./DTOParser";
import { response } from "express";

class SteamUserService {
    private API_KEY_PATH = ".key";
    private API_KEY: string = "";

    loadKey(): string | void {
        var fs = require("fs");
        var key = "";
        fs.readFile(this.API_KEY_PATH, (err: any, data: any) => {
            if (err) throw err;
            this.API_KEY = data.toString();
        });
        return key;
    }

    getKey() {
        this.loadKey();
        return (this.API_KEY);
    }

    private async getUserResponse(steamid: string): Promise<any> {
        const url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.getKey() + "&steamid=" + steamid + "&format=json";
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    }

    private async getGameResponse(appid: string): Promise<any> {
        const url = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=" + appid + "&count=0&maxlength=300&format=json";
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    }

    async getUser(steamid: string): Promise<SteamUser> {
        const response = await this.getUserResponse(steamid);
        return DTOParser.parseUser(steamid, response)
    }

}

export {SteamUserService};

