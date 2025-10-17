import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Thoriq");

  console.log("🔥 Parent render");

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-teal-400">
        Tugas 1 : Menggunakan React.memo ⚡
      </h1>

      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg font-semibold"
        >
          Tambah Count ({count})
        </button>

        <button
          onClick={() => setName(name === "Thoriq" ? "Rick" : "Thoriq")}
          className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg font-semibold"
        >
          Ganti Nama
        </button>
      </div>

      {/* Komponen anak */}
      <Child name={name} />

      <p className="text-sm mt-6 text-gray-400">
        Cek di console: Parent re-render tiap klik tombol, tapi Child cuma render saat props berubah 👀
      </p>
    </div>
  );
}
