import { useState, useCallback } from "react";

function App() {
  let [password, setPassword] = useState("ac173bSj");
  let [length, setLength] = useState(8);
  let [charAllowed, setCharAllowed] = useState(false);
  let [numAllowed, setNumAllowed] = useState(false);

  const generate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&_-";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);

      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);

  return (
    <>
      <div className="main h-screen w-full bg-zinc-900 text-white flex flex-col gap-4 items-center py-11">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="h-12 w-[30vw] bg-transparent border-2 border-white rounded-lg px-2"
        />

        <input
          type="number"
          className="bg-zinc-900 text-white border w-[8vw] p-2 rounded-md"
          value={length}
          min={6}
          max={20}
          onChange={(e) => setLength(e.target.value)}
        />

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="num"
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />

          <label htmlFor="num">Include Numbers</label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="char"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="char">Include Characters</label>
        </div>
        <button
          className="bg-green-500 text-white rounded-md px-3 py-2 cursor-pointer"
          onClick={generate}
        >
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
