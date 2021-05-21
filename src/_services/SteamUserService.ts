import { SteamUser } from "../_domain/SteamUser";
import { DTOParser } from "../_dataAccess/_util/DTOParser";
import {UserRequest} from "../_dataAccess/_requests/UserRequest";
import {SteamUserDTO} from "../_dataAccess/_util/SteamUserDTO";
import {ISteamAPIConfig} from "../_dataAccess/ISteamAPIConfig";
import {ICache} from "../_dataAccess/_cache/ICache";

export interface ISteamUserService {
  getSteamUser(userId: string): Promise<SteamUser>
}

export class SteamUserService implements ISteamUserService{
  constructor(
      private config: ISteamAPIConfig,
      private httpHandler: IHttpRequestHandler,
      private cache: ICache<SteamUser>
  ) {
  }

  async getSteamUser(
      userId: string,
  ): Promise<SteamUser> {
    const cached = await this.cache.get<SteamUser>(userId);
    if (!!cached){
      return cached;
    }
    const SteamUserResponse = await this.httpHandler.getResponse(
        new UserRequest(this.config.getApiKey(), userId)
    ) as SteamUserDTO.IRootObject;
    const user = DTOParser.parseUser(userId, SteamUserResponse);
    await this.cache.store<SteamUser>(user)
    return user;
  }
}
