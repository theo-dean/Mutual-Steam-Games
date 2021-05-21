import { SteamUser } from "../_domain/SteamUser";
import { DTOParser } from "./_util/DTOParser";
import {UserRequest} from "./_requests/UserRequest";
import {SteamUserDTO} from "./_util/SteamUserDTO";
import {ISteamAPIConfig} from "./ISteamAPIConfig";

export class SteamUserService {
  constructor(
      private config: ISteamAPIConfig,
      private httpHandler: IHttpRequestHandler
  ) {
  }

  async getSteamUser(
      UserId: string,
  ): Promise<SteamUser> {
    // TODO: Caching check goes here (or in gateway?)
    const SteamUserResponse = await this.httpHandler.getResponse(
        new UserRequest(this.config.getApiKey(), UserId)
    ) as SteamUserDTO.IRootObject;
    return DTOParser.parseUser(UserId, SteamUserResponse);
  }
}
