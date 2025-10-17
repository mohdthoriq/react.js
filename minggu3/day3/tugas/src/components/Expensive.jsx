import React, { useState } from "react";
import ExpensiveCalculation from "./ExpensiveCalc";

export default function Expensive() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  console.log("🔥 Parent render");

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
      Tugas 2:   useMemo Optimization Demo ⚡
      </h1>

      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setNumber(number + 1)}
            className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg font-semibold"
          >
            Tambah Number ({number})
          </button>

          <button
            onClick={() => setNumber(number - 1)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold"
          >
            Kurang Number
          </button>
        </div>

        <input
          type="text"
          placeholder="Ketik sesuatu (tidak trigger perhitungan)"
          className="mt-4 px-3 py-2 rounded-md text-black bg-gray-200 border border-gray-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <ExpensiveCalculation number={number} />
      </div>

      <p className="text-gray-400 mt-6 text-sm">
        Coba ketik di input — Parent re-render tapi useMemo mencegah perhitungan berat ulang 😎
      </p>
    </div>
  );
}
