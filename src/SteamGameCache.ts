import { SteamGame } from "./SteamGame";

export class SteamGameCache {
    private static instance: SteamGameCache;
    private cache: {game: SteamGame, expiryDate: Date}[] = []
    private CACHE_EXPIRY_LENGTH_MONTHS = 1;  

    constructor() {
        if (!!SteamGameCache.instance){
            return SteamGameCache.instance;
        }

        SteamGameCache.instance = this;
        return this;
    }

    public getGame(appid: string): SteamGame | false{
        const result = this.get(appid)
        return !!result ? result.game : false;
    }

    public set(game: SteamGame): void {
        if (!this.recordExists(game.appid)){
            let expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth()+this.CACHE_EXPIRY_LENGTH_MONTHS)
            this.cache.push({
                game,
                expiryDate
            });
        }
    }

    private recordExists(appid: string): boolean {
        return !!this.get(appid);
    }

    private get(appid: string): {game: SteamGame, expiryDate: Date} | undefined{
        return this.cache.find(x => x.game.appid === appid)
    }

    private isExpired(appid: string): boolean {
        return true;
    }

    private removeRecord(): void {

    }
}