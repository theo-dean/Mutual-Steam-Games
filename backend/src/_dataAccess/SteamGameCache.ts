import { IGameCache } from "./IGameCache";
import { SteamGame } from "../_domain/SteamGame";

export class SteamGameCache implements IGameCache {
  private static instance: SteamGameCache;
  private cache: { game: SteamGame; expiryDate: Date }[] = [];
  private CACHE_EXPIRY_LENGTH_MONTHS = 1;

  constructor() {
    if (!!SteamGameCache.instance) {
      return SteamGameCache.instance;
    }

    SteamGameCache.instance = this;
    return this;
  }

  public getGame(appid: string): SteamGame | false {
    const result = this.get(appid);
    return !!result ? result.game : false;
  }

  public setGame(game: SteamGame): void {
    if (!this.recordExists(game.appid)) {
      let expiryDate = new Date();
      expiryDate.setMonth(
        expiryDate.getMonth() + this.CACHE_EXPIRY_LENGTH_MONTHS
      );
      this.cache.push({
        game,
        expiryDate,
      });
    }
  }

  private recordExists(appid: string): boolean {
    return !!this.get(appid);
  }

  private get(appid: string): { game: SteamGame; expiryDate: Date } | false {
    const record = this.cache.find((x) => x.game.appid === appid);
    return !!record ? record : false;
  }

  private isExpired(appid: string): boolean {
    const record = this.get(appid);
    const today = new Date();
    return record ? record.expiryDate < today : false;
  }

  private removeRecord(appid: string): void {
    this.cache = this.cache.filter((x) => x.game.appid !== appid);
  }
}
