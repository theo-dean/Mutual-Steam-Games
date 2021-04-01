import axios, {AxiosResponse} from "axios";

class HttpRequestHandler implements IHttpRequestHandler{
    async getResponse<T>(request: IHttpRequest): Promise<any>{
        const {
            URL: url,
            Method: method,
            Headers: headers,
            Body: data
        } = request;
        return await axios.request<T>({url, method, headers, data});
    }
}