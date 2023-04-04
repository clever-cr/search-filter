import { list } from "postcss";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "./features/Filter";

const App = () => {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.search);

  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center p-5 space-y-5">
      <div className="space-x-5">
        <input
          placeholder="search..."
          className="outline-none  border-gray-400 border p-1"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          className="bg-blue-950 px-6 py-2 text-white"
          onClick={() => {
            dispatch(Filter({ fruit: input }));
          }}
        >
          Filter
        </button>
      </div>

      {searchFilter.map((fruit, index) => {
        return <h1>{fruit}</h1>;
      })}
    </div>
  );
};

export default App;
