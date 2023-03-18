import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
export default function CounterReset({ reset, setIncrementAmount }) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        setIncrementAmount(0);
        dispatch(reset());
      }}
      variant="danger"
      size="md"
      type="button"
      className="ms-2"
    >
      Reset
    </Button>
  );
}
