import type { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/features/users/usersSlice";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function Users() {
    const { data, loading, error } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Daftar Pengguna</CardTitle>
                <CardDescription>Ambil data pengguna dari API.</CardDescription>
            </CardHeader>
            <CardContent>
                {error && <p className="text-destructive">{error}</p>}
                {loading && (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[220px]" />
                    </div>
                )}
                {!loading && data.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                        {data.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter>
                <Button onClick={() => dispatch(fetchUsers())} disabled={loading}>
                    Ambil Data Pengguna
                </Button>
            </CardFooter>
        </Card>
    )
}