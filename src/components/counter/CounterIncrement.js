import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
export default function CounterIncrement({ increment }) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(increment())}
      variant="primary"
      size="md"
      type="button"
    >
      Increment +
    </Button>
  );
}
