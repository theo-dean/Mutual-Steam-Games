import {SteamGameService} from "./_services/SteamGameService";
import getGame from "./_controllers/_getGame";

 async function main(){
    const gameService = new SteamGameService();

    return await getGame(
        gameService,
        '811320'
    );
}

main().then(data => {
    console.log(data);
})