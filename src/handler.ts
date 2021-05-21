// TODO: Think about how to handle keys and such; environment variables?
import findGame from "./findGame";
import * as express from 'express';
import * as serverless from 'serverless-http';

const app = express();

app.get('/app/:appId', async function (req, res){
    const response = JSON.stringify(await findGame(req.params.appId));
    console.log('RESPONSE: '+response);
    res.send(response);
    });

module.exports.handler = serverless(app);