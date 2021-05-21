import * as express from 'express';
import * as serverless from 'serverless-http';
import findGame from "./findGame";

const app = express();

app.get('/app/:appId', function(req,res){
    const appId = req.params.appId;
    const response = findGame(appId);
    res.send(response);
});

module.exports.handler = serverless(app);