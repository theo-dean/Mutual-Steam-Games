import axios from "axios";
import {ILogger} from "./Logger";

class HttpRequestHandler implements IHttpRequestHandler{
    constructor(private logger: ILogger) {
    }

    async getResponse<T>(request: IHttpRequest): Promise<T | null>{
        const {
            URL: url,
            Method: method,
            Headers: headers,
            Body: data
        } = request;
        const res = await axios.request<T>({url, method, headers, data});

        if (res.status === 200){
            return res.data;
        }
        this.logger.error(`Request:\n URL:${url}\n Method:${method}\n Headers: ${headers}\n Body: ${data}\n Failed with Error:\n`, res);
        return null;
    }
}