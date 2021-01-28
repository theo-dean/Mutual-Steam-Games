declare module SteamGameDTO {
    export interface Game {
        appid: string;
        name: string;
    }

    export interface Apps {
        apps: Game[]
    }

    export interface RootObject {
        applist: Apps;
    }
}