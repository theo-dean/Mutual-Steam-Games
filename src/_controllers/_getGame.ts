import {SteamGame} from "../_domain/SteamGame";
import {ISteamGameService} from "../_services/SteamGameService";

export default async function getGame(
    gameService: ISteamGameService,
    appId: string
) : Promise<SteamGame> {
    return await gameService.getSteamGame(appId);
}