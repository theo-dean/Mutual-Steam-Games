import express from 'express';
import { SteamUserService } from './SteamUserService';
import {TESTING} from "./TESTING";

const app = express();
const steam = new SteamUserService();
steam.loadKey();
const port = 3000;

app.get('/', (req, res) => {
    /*steam.loadKey();
    let response = steam.getGames("76561198019038761");
    response.then(data => res.send(data));*/
    TESTING.jsonPrint();    //TODO: Parse JSON response from SteamUserService getGames()

});

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})