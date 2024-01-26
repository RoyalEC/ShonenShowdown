import React from "react";
import { Button } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

function Body() {
  return (
    <>
      <div className="bodyText">
        <h1 className="landText">Shonen Showdown</h1>
        <b className="bText">
          Unleash Your Power in the Ultimate Anime Universe
        </b>
        {/* <p>
          Step into the arena of "Shonen Showdown", where the mightiest anime
          heroes clash in a strategic battle of wits and strength. Gather your
          squad, harness unique abilities, and challenge your destiny on the
          path to glory. Are you ready to carve your name in the annals of
          victory?
        </p> */}
        <InputGroup className="inputText" size="lg">
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
