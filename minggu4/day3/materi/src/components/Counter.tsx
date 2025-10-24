import type { RootState } from "@/app/store"
import { decrement, increment, incrementByValue } from "@/features/counter/counterSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>tambah</button>
            <button onClick={() => dispatch(decrement())}>kurang</button>
            <button onClick={() => dispatch(incrementByValue(10))}>tambah 10</button>
        </>
    )
}