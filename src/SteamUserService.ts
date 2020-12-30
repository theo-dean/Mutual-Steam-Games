import axios from "axios";

class SteamUserService {
    private API_KEY_PATH = ".key";
    private API_KEY: string = "";

    SteamUserService(){
        this.start();
    }

    start(){
        this.loadKey();
    }

    loadKey(): string | void{
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

    getGameIDs(steamid: string){
        let response = this.getGames(steamid);
        let gameids;
        return response.then(data => gameids = this.parseGameIDs(data));
    }

    async getGames(steamid: string) {
        const url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.getKey() + "&steamid=" + steamid + "&format=json";
        try {
            const response = await axios.get(url);
            return response.data;       // TODO: Parse response
        } catch (error){
            console.error(error);
        }

    }

    parseGameIDs(json: any){
        let games = json.response.games;
        let gameIds : number[] = [];

        for (let game of games){
            //console.log(game.appid);
            gameIds.push(game.appid)
        }
        return gameIds;
    }

    parseJSON(json: string){

    }
}

export {SteamUserService};

