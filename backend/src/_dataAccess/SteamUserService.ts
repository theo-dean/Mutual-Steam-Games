import { SteamUser } from "../_domain/SteamUser";
import { DTOParser } from "./_util/DTOParser";
import {SteamService} from "./_services/SteamService";
import {UserRequest} from "./_requests/UserRequest";
import {SteamUserDTO} from "./_util/SteamUserDTO";

export class SteamUserService {
  static async getSteamUser(steam: SteamService, UserId: string): Promise<SteamUser> {
    // TODO: Caching check goes here (or maybe in SteamService??)
    const SteamUserResponse = await steam.getHttpResponse(new UserRequest(steam.getKey(), UserId)) as SteamUserDTO.IRootObject
    const steamUser = DTOParser.parseUser(UserId, SteamUserResponse);
    return steamUser;
  }
}
