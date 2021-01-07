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
    const manager = SteamUserManager.getInstance();
    steam.loadKey();
    steam.getServerResponse(steamid).then(data => {
        manager.addUser(new SteamUser(steamid, steam.parseGameIDs(data)));
    });
    steamid = "76561198041070788";
    steam.getServerResponse(steamid).then(data => {
        manager.addUser(new SteamUser(steamid, steam.parseGameIDs(data)));
    });

    Promise.all(steam.getPromises()).then((vals) => {
        vals.forEach(user => {

        })
        console.log(manager.getUsers())
        res.send(manager.getUsers());
    });
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})