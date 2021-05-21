import {rest} from "msw";

export const Handlers = [
    rest.get('/test', ((req, res, context) => {
        return res(context.status(200));
    }))
]
