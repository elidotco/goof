import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-green-500  flex items-center justify-center">
      <div class="relative">
        <div class="w-50 h-50 border-purple-200 border-2 rounded-full"></div>
        <div class="w-50 h-50 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>
    </div>
  );
};

export default Loader;
