import {SteamUser} from "./SteamUser";

class SteamUserManager {
    private users: SteamUser[] = [];

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