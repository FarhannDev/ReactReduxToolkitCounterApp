import { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function CounterAddMount({
  incrementAmount,
  setIncrementAmount,
  onSubmitHandler,
}) {
  const inputRef = useRef();

  return (
    <>
      <div className="d-flex flex-column g-3 ">
        <div className="d-block w-100 mb-3 py-3 ">
          <div className="row justify-content-center">
            <Form
              onSubmit={onSubmitHandler}
              className="col-lg-6 col-sm-12 col-md-12"
            >
              <InputGroup className="mb-3">
                <Form.Control
                  ref={inputRef}
                  value={incrementAmount}
                  onChange={(e) => setIncrementAmount(e.target.value)}
                  type="text"
                  placeholder="Add custom count number..."
                />
                <Button type="submit" variant="dark" size="md">
                  Add Mount
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
