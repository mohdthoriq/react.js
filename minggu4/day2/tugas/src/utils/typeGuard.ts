export interface ApiError {
    message: string
    code: number
}

export function isApiError(error: unknown) : error is ApiError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        'code' in error
    )
}