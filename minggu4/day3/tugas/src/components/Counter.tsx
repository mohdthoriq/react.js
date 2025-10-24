import type { RootState } from "@/app/store";
import { decrement, increment, reset } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()


    return (
        <Card>
            <CardHeader>
                <CardTitle>Redux Counter</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
                <h2 className="text-5xl font-bold">{count}</h2>
                <div className="flex space-x-2">
                    <Button onClick={() => dispatch(increment())}>Tambah</Button>
                    <Button variant="outline" onClick={() => dispatch(decrement())}>Kurang</Button>
                    <Button variant="destructive" onClick={() => dispatch(reset())}>Reset</Button>
                </div>
            </CardContent>
        </Card>
    )

}