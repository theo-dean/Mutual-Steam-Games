export class SteamUser {
  steamid: string = "";
  games: Array<number> = [];

  constructor(steamid: string, games: Array<number>) {
    this.steamid = steamid;
    this.games = games;
  }

  compareGamesWithUser(user: SteamUser): Array<number> {
    return this.games.filter((val) => user.games.includes(val));
  }
}
