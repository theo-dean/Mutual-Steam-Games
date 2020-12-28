import express from 'express';

const app = express();
const steam = new SteamUserService();
const port = 3000;

app.get('/', (req, res) => {
    res.send(steam.printKey());
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log('listening on port:'+port);
});