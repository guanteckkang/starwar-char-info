import { useState } from "react";

export function Buttons({ amt }) {
  const [num, setNum] = useState(0);
  const [remain, setRemain] = useState(100);

  function increase() {
    // setNum(num + amt);
    setNum((prev) => prev + amt);
    setRemain((prev) => prev - amt);
  }
  function reset() {
    setNum(0);
    setRemain(100);
  }

  return (
    <div>
      <button
        onClick={() => {
          increase();
        }}
      >
        Click {amt}
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <p>
        {num} is clicked. Remaining is {remain}
      </p>
    </div>
  );
}
