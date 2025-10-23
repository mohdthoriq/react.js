import { useState, useEffect } from 'react';
import { isApiError } from '../utils/typeGuard';


type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export const useApi = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<ApiStatus>('idle')

    useEffect(() => {
        const fetchData = async () => {
            setStatus('loading')
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error('Network response was not ok')
                const json: T = await res.json()
                setData(json)
                setStatus('success')
            } catch (err) {
                if (isApiError(err)) {
                    console.error('API Error:', err.message);
                    setError(err.message);
                } else {
                    console.error('Network or unknown error:', err);
                    setError('Something went wrong');
                }
            }
        }

        fetchData()
    }, [url])

    return { data, error, status }

}