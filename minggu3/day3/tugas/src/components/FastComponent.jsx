import React from "react";

const FastComponent = () => {
  console.log("⚡ FastComponent rendered");
  return <div className="p-3 bg-green-600 rounded-md">Fast Component 🚀</div>;
};

export default React.memo(FastComponent);
