export interface ILogger {
    log(...data: any[]): void;
    error(message: string, data?: any): void;
}

export class ConsoleLogger implements ILogger {
    log(...data: any[]){
        console.log(data);
    }

    error(message: string, data?: any){
        console.error(message, data);
    }
}