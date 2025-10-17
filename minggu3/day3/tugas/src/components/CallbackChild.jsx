import React from "react";

function Child({ onClick }) {
  console.log("🧒 Child component rendered!");

  return (
    <div className="mt-4">
      <button
        onClick={onClick}
        className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 text-white font-medium"
      >
        Child Button
      </button>
    </div>
  );
}

// 🔥 React.memo biar gak rerender kalo props-nya gak berubah
export default React.memo(Child);
