export class SteamUser {
  steamid: string = "";
  games: Array<string> = [];

  constructor(steamid: string, games: Array<string>) {
    this.steamid = steamid;
    this.games = games;
  }

  compareGamesWithUser(user: SteamUser): Array<string> {
    return this.games.filter((appid) => user.games.includes(appid));
  }
}
