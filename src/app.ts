import express from 'express';
import { SteamUserService } from './SteamUserService';

const app = express();
const steam = new SteamUserService();
steam.loadKey();
const port = 3000;

app.get('/', (req, res) => {
    steam.loadKey();
    let response = steam.getGameIDs("76561198019038761");
    response.then(data => res.send(data));


});

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})