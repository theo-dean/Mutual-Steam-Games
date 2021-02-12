import express from 'express';
import { SteamUserService } from './SteamUserService';
import {SteamUser} from "./SteamUser";
import {SteamUserManager} from "./SteamUserManager";
import { SteamGameService } from './SteamGameService';

const app = express();
const steam = new SteamUserService();
steam.loadKey();
const port = 3000;

app.get('/', (req, res) => {
    const manager = SteamUserManager.getInstance();
    steam.loadKey();
    let user1: SteamUser, user2: SteamUser;
    let steamid = "76561198019038761";
    const promise1 = steam.getUser(steamid).then(user => user1= user);
    steamid = "76561198041070788";
    const promise2 = steam.getUser(steamid).then(user => user2= user);

    var commonGameIds: number[]
    var gameNames:string[]
    Promise.all([promise1,promise2]).then(function(){
        commonGameIds = user1.compareGamesWithUser(user2)
    }).then(function(){
        gameNames = []
        commonGameIds.forEach((element) => {
            if (element === 222880){
                gameNames.push("Insurgency");
            }
        })
    }).finally(function(){
        //res.send(gameNames);
    })

    const steamGameService = new SteamGameService();
    const insurgency = steamGameService.getGame("222880")
    insurgency.then(function(x){
        res.send(x)
    })


})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})
