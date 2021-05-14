// TODO: Think about how to handle keys and such; environment variables?

import {Handler} from "aws-lambda";
import findGame from "./test";

export const testFunc: Handler = async (event: any) => {
    const timestamp = new Date();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
                message: JSON.stringify(event),
            },
            null,
            2),
    };
    console.log("Finished in src/handler");
    return new Promise((resolve) => {
        resolve(response);
    })

}