export interface ICache<T> {
    get<T>(key: string): T;
    store<T>(key: string): T;
}