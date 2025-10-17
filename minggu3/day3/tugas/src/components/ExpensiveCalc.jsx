import React, { useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  console.log("⚙️ ExpensiveCalculation dijalankan ulang...");

  // Simulasi proses berat banget
  const result = useMemo(() => {
    console.log("🧠 Perhitungan berat dijalankan...");
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += Math.sqrt(i * number);
    }
    return total.toFixed(2);
  }, [number]); // ✅ hanya dihitung ulang saat number berubah

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg mt-4">
      <p className="text-lg font-semibold">
        Hasil perhitungan berat dari {number}: <span className="text-green-400">{result}</span>
      </p>
    </div>
  );
};

export default ExpensiveCalculation;
