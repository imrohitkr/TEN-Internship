// eslint-disable-next-line no-unused-vars
import React from "react";
import CardPagination from "./Component/CardPagination";

function App() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-5">
        <CardPagination />
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button className="bg-gray-300 px-5 rounded-full"> prev </button>
        <button className="bg-gray-300 px-5 rounded-full"> next </button>
      </div>
    </>
  );
}

export default App;
