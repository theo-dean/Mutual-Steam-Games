// TODO: Think about how to handle keys and such; environment variables?

import {Handler} from "aws-lambda";
import findGame from "./test";

export const testFunc: Handler = async (event: any) => {
    const body = JSON.parse(event.body)
    const appResponse = await findGame(body.appid);
    const response =  {
        statusCode: 200,
        body: JSON.stringify({
                app: appResponse,
            },
            null,
            2),
    }
    return response;
}