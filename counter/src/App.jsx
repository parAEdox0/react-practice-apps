import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  function addValue() {
    if (counter === 20) return;
    setCounter(counter + 1);
  }

  function decreaseValue() {
    if (counter === 0) return;

    setCounter(counter - 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
