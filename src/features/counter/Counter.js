import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const sanitizedAmount = +amount || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(sanitizedAmount))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(sanitizedAmount))}>
          Minus Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
