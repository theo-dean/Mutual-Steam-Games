declare module SteamUserDTO {
    export interface IGame {
        appid: number;
        playtime_forever: number;
        playtime_windows_forever: number;
        playtime_mac_forever: number;
        playtime_linux_forever: number;
        playtime_2weeks?: number;
    }

    export interface IResponse {
        game_count: number;
        games: IGame[];
    }

    export interface IRootObject {
        response: IResponse;
    }
}


