import { SteamGame } from "../_domain/SteamGame";

export interface IGameCache {
    getGame(appid: string): SteamGame | false;
    setGame(game: SteamGame): void;
}