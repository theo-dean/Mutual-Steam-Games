import { SteamUser } from "../_domain/SteamUser";
import { DTOMapper } from "../_dataAccess/_util/DTOMapper";
import {UserRequest} from "../_dataAccess/_requests/UserRequest";
import {SteamUserDTO} from "../_dataAccess/_util/SteamUserDTO";
import {ISteamAPIConfig} from "../_dataAccess/ISteamAPIConfig";
import {ICache} from "../_domain/Cache";
import axios from "axios";

export interface ISteamUserService {
  getSteamUser(userId: string): Promise<SteamUser>
}

export class SteamUserService implements ISteamUserService{
  constructor(
      private config: ISteamAPIConfig,
      private cache: ICache<SteamUser>
  ) {
  }

  async getSteamUser(
      userId: string,
  ): Promise<SteamUser> {
    const cached = await this.cache.get(userId);
    if (!!cached){
      return cached;
    }
    const SteamUserResponse = await axios.get(
        new UserRequest(this.config.getApiKey(), userId).URL
    ) as SteamUserDTO.IRootObject;
    const user = DTOMapper.parseUser(userId, SteamUserResponse);
    await this.cache.set(user, 1);
    return user;
  }
}
