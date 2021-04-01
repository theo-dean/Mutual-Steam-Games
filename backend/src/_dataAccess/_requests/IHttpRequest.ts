interface IHttpRequestHandler {
    getResponse<T>(request: IHttpRequest): Promise<any>;
}

interface IHttpRequest {
    URL: string;
    Method: HttpMethod;
    Headers?: string;
    Body?: string;
}

// Enum containing all supported Http Methods.
enum HttpMethod {
    GET = "GET"
}