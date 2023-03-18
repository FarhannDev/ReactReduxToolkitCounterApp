import CounterIncrement from "./CounterIncrement";
import CounterDecrement from "./CounterDecrement";
import CounterReset from "./CounterReset";

export default function CounterAction({
  increment,
  decrement,
  reset,
  setIncrementAmount,
}) {
  return (
    <div className="d-flex justify-content-center">
      <div className="py-3 mt-3">
        <CounterIncrement increment={increment} />
        <CounterDecrement decrement={decrement} />
        <CounterReset reset={reset} setIncrementAmount={setIncrementAmount} />
      </div>
    </div>
  );
}
