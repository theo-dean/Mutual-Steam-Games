import {SteamUser} from "./SteamUser";
import axios, {AxiosResponse} from "axios";

class SteamUserService {
    private API_KEY_PATH = ".key";
    private API_KEY: string = "";
    private promises: Promise<AxiosResponse<string>>[]

    constructor() {
        this.start();
        this.promises = [];
    }

    start() {
        this.loadKey();
    }

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
        return (this.API_KEY);
    }

    async getServerResponse(steamid: string): Promise<any> {
        const url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.getKey() + "&steamid=" + steamid + "&format=json";
        const response = await axios.get(url);
        const data = await response.data;
        this.addPromise(data);
        return data;
    }

    parseGameIDs(json: any): Array<number> {
        let games = json.response.games;
        let gameIds: number[] = [];

        for (let game of games) {
            gameIds.push(game.appid)
        }
        return gameIds;
    }

    addPromise(promise: Promise<any>){
        this.promises.push(promise);
    }

    getPromises(): Promise<any>[] {
        return this.promises;
    }

}

export {SteamUserService};

