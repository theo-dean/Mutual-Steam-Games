export interface ICache<T> {
    get<T>(key: string): Promise<T>;
    store<T>(object: T): Promise<void>;
}