import axios from "axios";

class SteamUserService {
    private API_KEY_PATH = ".key";
    API_KEY = "";

    loadKey(): string {
        var fs = require("fs");
        var key = "";
        // @ts-ignore
        fs.readFile(this.API_KEY_PATH, (err, data) => {
            if (err) throw err;
            this.API_KEY = data.toString();
        });
        return key;
    }

    getKey() {
        return (this.API_KEY);
    }

    async getGames(steamID: string) {
        const url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.getKey() + "&steamid=" + steamID + "&format=json";
        try {
            const response = await axios.get(url);
            return response.data;       // TODO: Parse response
        } catch (error){
            console.error(error);
        }

    }

    parseJSON(json: string){

    }
}

export {SteamUserService};

