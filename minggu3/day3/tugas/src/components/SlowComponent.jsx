import React from "react";

const SlowComponent = () => {
  console.log("🐢 SlowComponent rendered");

  // Simulasi proses berat (misal perhitungan loop besar)
  let sum = 0;
  for (let i = 0; i < 10_000_000; i++) {
    sum += i;
  }

  return <div className="p-3 bg-yellow-600 rounded-md">Slow Component 😴</div>;
};

export default SlowComponent;
