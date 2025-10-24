import type { AppDispatch,  RootState } from "@/app/store"
import { fetchUsers } from "@/features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function UserList() {
    const { list: users, status, error } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        // Dispatch async thunk saat komponen pertama kali di-mount
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Memuat pengguna...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Daftar Pengguna</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}