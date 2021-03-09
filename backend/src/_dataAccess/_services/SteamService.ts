import axios from "axios";
import {DTOParser} from "../_util/DTOParser";

export class SteamService {
    private readonly API_KEY_PATH;
    private API_KEY: string;

    constructor(ApiKeyPath?: string) {
        if (ApiKeyPath){
            this.API_KEY_PATH = ApiKeyPath;
        } else {
            this.API_KEY_PATH = ".key";
        }
        this.API_KEY = this.loadKey();
    }

    loadKey(): string {
        const fs = require("fs");
        let key = "";
        fs.readFile(this.API_KEY_PATH, (err: any, data: any) => {
            if (err) throw err;
            key = this.API_KEY = data.toString();
        });
        return key;
    }

    getKey(): string {
        return this.API_KEY;
    }

    async getHttpResponse(request: IRequest){
        const response = await axios.get(request.URL);
        return await response.data;
    }


}