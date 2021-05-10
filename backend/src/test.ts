import {SteamGameService} from "./_services/SteamGameService";
import getGame from "./_controllers/_getGame";

 async function main(){
    const gameService = new SteamGameService();

    return await getGame(
        gameService,
        '811320'
    );
}

/*
main().then(data => {
    console.log(data);
})*/

const testFunc = (event: any, context: any, callback: any) => {
    const timestamp = new Date();
    return {
        statusCode: 200,
        body: JSON.stringify(timestamp)
    }
}

export {testFunc}