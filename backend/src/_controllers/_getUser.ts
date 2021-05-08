import {ISteamUserService} from "../_services/SteamUserService";

export class _getUser {

    constructor(
       private userService: ISteamUserService
    ) {
    }

    async getUser(userId: string){
        return this.userService.getSteamUser(userId);
    }
}