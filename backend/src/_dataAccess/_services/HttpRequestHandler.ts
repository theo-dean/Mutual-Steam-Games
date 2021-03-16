import axios, {AxiosResponse} from "axios";

class HttpRequestHandler {
    static async getResponse<T>(request: IHttpRequest): Promise<AxiosResponse<T>>{
        const {
            URL: url,
            Method: method,
            Headers: headers,
            Body: data
        } = request;
        const response = await axios.request<T>({url, method, headers, data})
        return response;
    }
}