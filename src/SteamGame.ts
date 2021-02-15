export class SteamGame {
  appid: string;
  name: string | undefined;

  constructor(appid: string, name: string) {
    this.appid = appid;
    this.name = name;
  }
}
