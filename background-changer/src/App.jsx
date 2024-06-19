import { useState } from "react";

function App() {
  let [backgroundColor, setBackgroundColor] = useState("black");

  return (
    <>
      <div
        className="main h-screen w-full flex items-center justify-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <button
          className="mr-1 text-white border rounded-lg px-5 py-1"
          onClick={() => setBackgroundColor("red")}
        >
          red
        </button>
        <button
          className="mr-1 text-white border rounded-lg px-5 py-1"
          onClick={() => setBackgroundColor("green")}
        >
          green
        </button>
        <button
          className="mr-1 text-white border rounded-lg px-5 py-1"
          onClick={() => setBackgroundColor("yellow")}
        >
          yellow
        </button>
      </div>
    </>
  );
}

export default App;
