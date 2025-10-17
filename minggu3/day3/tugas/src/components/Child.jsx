import React from "react";

const Child = ({ name }) => {
  console.log(`🧩 Child render (${name})`);
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
      <p className="text-lg font-semibold">Halo {name} 👋</p>
    </div>
  );
};

// ⛔ Gunakan React.memo agar gak re-render kalau props gak berubah
export default React.memo(Child);
