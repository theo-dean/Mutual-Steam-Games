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
    let steamid = "76561198019038761";
    steam.getServerResponse(steamid);
    steamid = "76561198041070788";
    steam.getServerResponse(steamid);

    Promise.all(steam.getPromises()).then((vals) => {
        vals.forEach(userResponse => {
            manager.addUser(userResponse.response.games);
        })
        res.send(manager.getUsers());
    });
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})