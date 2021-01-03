import express from 'express';
import { SteamUserService } from './SteamUserService';
import {SteamUser} from "./SteamUser";

const app = express();
const steam = new SteamUserService();
steam.loadKey();
const port = 3000;

app.get('/', (req, res) => {
    let steamid = "76561198019038761";
    let userTheo: SteamUser;
    steam.loadKey();
    steam.getServerResponse(steamid).then(data => {
        userTheo = new SteamUser(steamid, steam.parseGameIDs(data));
    });

})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})