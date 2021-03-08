export class SteamService {
    private readonly API_KEY_PATH;
    private API_KEY: string | undefined;

    constructor(ApiKeyPath?: string) {
        if (ApiKeyPath){
            this.API_KEY_PATH = ApiKeyPath;
        } else {
            this.API_KEY_PATH = ".key";
        }
        this.loadKey();
    }

    loadKey(): void {
        var fs = require("fs");
        var key = "";
        fs.readFile(this.API_KEY_PATH, (err: any, data: any) => {
            if (err) throw err;
            this.API_KEY = data.toString();
        });
    }

    getResponse<T>(){

    }


}