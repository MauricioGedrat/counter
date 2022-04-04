import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex items-center justify-center text-center">
      <div className="flex-col">
        <h1 className="font-mono text-2xl font-bold">Counter</h1>
        <div>Value: {count}</div>
        <div>
          <button
            className="px-4 py-2 mr-4 bg-gray-200 rounded-lg"
            onClick={increment}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
