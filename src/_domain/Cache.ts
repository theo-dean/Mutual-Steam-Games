export interface ICache<T> {
    get(key: string): T | null;
    set(data: T, TTLInMinutes: number): void;
}