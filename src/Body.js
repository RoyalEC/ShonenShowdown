import React from "react";
import { Button } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

function Body() {
  return (
    <>
      <div className="bodyText">
        <h1 className="landText">Shonen Showdown</h1>
        <p></p>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Sign-Up</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <Button variant="outline-light">Play Now</Button>
        </InputGroup>
      </div>
    </>
  );
}

export default Body;
