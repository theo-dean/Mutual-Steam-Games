import {SteamGameService} from "./_services/SteamGameService";
import getGame from "./_controllers/_getGame";
import {Handler} from "aws-lambda";

export default async function findGame(appid: string | null){
    const gameService = new SteamGameService();

    if (!appid){
        appid = '811320';
    }
    return await getGame(
        gameService,
        appid
    );
}

/*
main().then(data => {
    console.log(data);
})*/

