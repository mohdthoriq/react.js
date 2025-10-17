import { useState, useCallback } from "react";
import Child from "./CallbackChild";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ⚡ callback TANPA useCallback (aktifkan ini buat lihat perbedaan)
  // const handleClick = () => console.log("Clicked Child");

  // ⚡ callback DENGAN useCallback
  const handleClick = useCallback(() => {
    console.log("Clicked Child");
  }, []); // ← fungsi cuma dibuat sekali!

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#ccc",
    color: dark ? "white" : "black",
    padding: "2rem",
    borderRadius: "10px",
    width: "300px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={themeStyle} className="text-center">
      <h2 className="text-lg font-semibold mb-2">
        Parent Component ({dark ? "Dark" : "Light"} Mode)
      </h2>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 text-white font-medium mr-2"
      >
        Increment Count ({count})
      </button>

      <button
        onClick={() => setDark((prev) => !prev)}
        className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 text-white font-medium"
      >
        Toggle Theme
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}
