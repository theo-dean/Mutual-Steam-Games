import express from 'express';
import { SteamUserService } from './SteamUserService';
import {SteamUser} from "./SteamUser";
import {SteamUserManager} from "./SteamUserManager";

const app = express();
const steam = new SteamUserService();
steam.loadKey();
const port = 3000;

app.get('/', (req, res) => {
    let steamid = "76561198019038761";
    steam.loadKey();
    steam.getServerResponse(steamid).then(data => {
        SteamUserManager.addUser(new SteamUser(steamid, steam.parseGameIDs(data)));
    });
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})