import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./CounterSlice";

import Box from "../../components/box/Box";
import CounterDisplay from "../../components/counter/CounterDisplay";
import CounterAction from "../../components/counter/CounterAction";
import CounterHeading from "../../components/counter/CounterHeading";
import CounterAddMount from "../../components/counter/CounterAddMount";
import styles from "../../styles/counter.module.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const onSubmitIncrementAmountHandler = (e) => {
    e.preventDefault();
    const values = Number(incrementAmount) || 0;
    dispatch(incrementByAmount(values));
  };

  return (
    <>
      <Box>
        <Card body className={`${styles.counterCard} mb-3 rounded shadow-sm `}>
          <CounterHeading title="Count history" />
          <CounterDisplay count={count} />
          <CounterAction
            increment={increment}
            decrement={decrement}
            reset={reset}
            setIncrementAmount={setIncrementAmount}
          />

          <CounterAddMount
            incrementAmount={incrementAmount}
            setIncrementAmount={setIncrementAmount}
            onSubmitHandler={onSubmitIncrementAmountHandler}
          />
        </Card>
      </Box>
    </>
  );
}
