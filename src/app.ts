import express from 'express';
import { SteamUserService } from './SteamUserService';
import {SteamUser} from "./SteamUser";
import {SteamUserManager} from "./SteamUserManager";

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
    
    Promise.all([promise1,promise2]).then(function(){
        res.send(user1.compareGamesWithUser(user2))
    })

    

    
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})