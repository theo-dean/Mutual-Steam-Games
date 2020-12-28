class SteamUserService{
    private API_KEY: string;
    private API_KEY_PATH = ".key";
    

    SteamUserService(){
        this.API_KEY = this.loadKey();
    }

    loadKey(): string{
        var fs = require("fs");
        var key = "";
        fs.readFile(this.API_KEY_PATH, function(err: Error, data: Promise<any>) {
            if (err) throw err;
            key = data.toString();
        });
        return key;
    }

    printKey(){
        console.log(this.API_KEY);
    }
}

