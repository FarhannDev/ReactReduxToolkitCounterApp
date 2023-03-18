import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
export default function CounterDecrement({ decrement }) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(decrement())}
      variant="primary"
      size="md"
      type="button"
      className="ms-2"
    >
      Increment -
    </Button>
  );
}
