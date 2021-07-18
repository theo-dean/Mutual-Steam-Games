import * as express from 'express';
import * as serverless from 'serverless-http';
import findGame from "./findGame";

const app = express();

app.get('/user/:appId', function(req,res){
    const appId = req.params.appId;
    console.log(`Sending request for appId: ${appId}`);
    const response = findGame(appId);
    console.log(`Received response: ${response}`);
    res.send(response);
});

module.exports.handler = serverless(app);