declare module SteamGameDTO {
    export interface IGame {
        appid: string;
        name: string;
    }

    export interface IApps {
        apps: IGame[]
    }

    export interface IRootObject {
        applist: IApps;
    }
}