import React, { useMemo } from "react";

const HeavyList = () => {
  console.log("💣 HeavyList rendered");

  const items = useMemo(() => {
    // Simulasi generate data berat
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(`Item ${i}`);
    }
    return arr;
  }, []);

  return (
    <div className="bg-slate-700 rounded-md p-3 h-60 overflow-y-scroll">
      {items.slice(0, 50).map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default HeavyList;
