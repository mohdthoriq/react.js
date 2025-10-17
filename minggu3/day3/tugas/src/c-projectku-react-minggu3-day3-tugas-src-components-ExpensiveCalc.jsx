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
            <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4 w-full flex-grow">
                <h2 className="text-xl font-bold mb-2 text-center">Tugas 2: useMemo</h2>
                <label className="block text-sm">Work size (num): {num}</label>
                <input
                    type="range"
                    min="1"
                    max="12"
                    value={num}
                    onChange={e => setNum(Number(e.target.value))}
                    className="w-full"
                />
                <div className="mt-3">Result: <strong>{result}</strong></div>

                <div className="mt-4">
                    <button onClick={() => setOther(o => o + 1)} className="px-3 py-1 bg-gray-300 rounded">Change other state: {other}</button>
                    <p className="text-xs text-gray-500 mt-2">Changing <code>other</code> does NOT rerun heavyCompute because useMemo dependency is [num].</p>
                </div>
            </div>
        </>
    )

}