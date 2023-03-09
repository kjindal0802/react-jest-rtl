import React, { useState } from "react";
import {
  FormControl,
  Button,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const getCheckBoxLabel = () => {
    return (
      <span>
        I agree to the
        <OverlayTrigger placement="right" overlay={popover}>
          <span style={{ color: "blue" }}> Terms and Conditions </span>
        </OverlayTrigger>
      </span>
    );
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Terms and Conditions</Popover.Header>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  return (
    <>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            label={getCheckBoxLabel()}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!checked}>
          Confirm Order
        </Button>
      </Form>
    </>
  );
}
