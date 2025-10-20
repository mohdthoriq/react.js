export const STORAGE_TOKEN_KEY = 'app_token_v1'

export default function saveAuth(token) {
    if (token) localStorage.setItem(STORAGE_TOKEN_KEY, token)
}

export function clearAuth() {
    localStorage.removeItem(STORAGE_TOKEN_KEY)
}

export function isAuthenticated() {
    return !!localStorage.getItem(STORAGE_TOKEN_KEY)
}