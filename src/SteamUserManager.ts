import {SteamUser} from "./SteamUser";

class SteamUserManager {
    private static instance: SteamUserManager;
    private users: SteamUser[];

    private constructor(){
        this.users = [];
    }

    public static getInstance(): SteamUserManager {
        if (!SteamUserManager.instance){
            SteamUserManager.instance = new SteamUserManager();
        }
        return SteamUserManager.instance;
    }

    public addUser(user: SteamUser){
        this.users.push(user);
    }

    public removeUser(user: SteamUser){
        const index = this.users.indexOf(user);
        if (index > -1){
            this.users.splice(index, 1);
        }
    }
}

export {SteamUserManager};