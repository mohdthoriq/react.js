import { useMemo, useState } from "react";

function heavyComputer(n) {
    console.log('heavy computer running for:', n);
    let total = 0
    for (let i = 0; i < n * 1000000; i++) {
        total += i % 2 === 0 ? 1 : 0
    }
    return total
}

export default function ExpensiveCalc() {
    const [num, setNum] = useState(5)
    const [other, setOther] = useState(0)

    const result = useMemo(() => heavyComputer(num), [num])
    console.log('expensive');

    return (
        <>
            <div className="p-6 bg-slate-800 rounded-2xl shadow-lg flex flex-col gap-4 w-full flex-grow border border-slate-700">
                <h2 className="text-xl font-bold mb-2 text-center text-white">Tugas 2: useMemo</h2>
                <label className="block text-sm text-slate-400">Work size (num): {num}</label>
                <input
                    type="range"
                    min="1"
                    max="12"
                    value={num}
                    onChange={e => setNum(Number(e.target.value))}
                    className="w-full accent-indigo-500"
                />
                <div className="mt-3 text-slate-300">Result: <strong className="text-yellow-400 font-mono">{result}</strong></div>

                <div className="mt-4">
                    <button onClick={() => setOther(o => o + 1)} className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded transition-colors">Change other state: {other}</button>
                    <p className="text-xs text-slate-500 mt-2">Changing <code>other</code> does NOT rerun heavyCompute because useMemo dependency is [num].</p>
                </div>
            </div>
        </>
    )

}