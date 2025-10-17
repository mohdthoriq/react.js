import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

export default function CallbackParent() {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    console.log('Callback Parent');

    const handleAction = useCallback(() => {
        console.log('action from child');
        setCount(prev => prev + 1)
    }, [])

    const handleActionNonMemo = () => {
        console.log('action from child');
        setCount(prev => prev + 1)
    }

    return (
        <>
            <div className="p-6 bg-slate-800 rounded-2xl shadow-lg flex flex-col gap-4 w-full flex-grow border border-slate-700">
                <h2 className="text-xl font-bold mb-2 text-center text-white">Tugas 3: useCallback</h2>

                <div className="flex gap-2">
                    <button onClick={() => setToggle(t => !t)} className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition-colors">Toggle: {String(toggle)}</button>
                    <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-colors">Parent +1</button>
                    <div className="ml-auto text-sm text-slate-300">Count: <strong className="text-yellow-400 font-mono">{count}</strong></div>
                </div>

                <hr className="my-3 border-slate-700" />

                <p className="text-xs text-slate-500">Child A gets <code>handleAction</code> memoized via useCallback.</p>
                <CallbackChild label="A (memoized cb)" onAction={handleAction} />

                <p className="text-xs text-slate-500 mt-3">Child B receives <code>handleActionNonMemo</code> (new function each render).</p>
                <CallbackChild label="B (non-memo cb)" onAction={handleActionNonMemo} />
            </div>
        </>
    )

}