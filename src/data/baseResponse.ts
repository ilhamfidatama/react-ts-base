export interface Response<T> {
    loading: boolean,
    data: T,
    status: number,
    message?: string
}