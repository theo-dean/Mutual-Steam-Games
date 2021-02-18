import { SteamGame } from "./SteamGame";

export class SteamGameCache {
    private static instance: SteamGameCache;
    private cache: {game: SteamGame, expiryDate: Date}[] = []

    constructor() {
        if (!!SteamGameCache.instance){
            return SteamGameCache.instance;
        }

        SteamGameCache.instance = this;
        return this;
    }

    public set(game: SteamGame): void {
        if (!this.recordExists(game)){
            let expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth()+1)
            this.cache.push({
                game,
                expiryDate
            });
        }
    }
}