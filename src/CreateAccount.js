import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function CreateAccount() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    termsAndConditions: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);

      // Collect form data
      const user = formData;
      user.termsAndConditions = user.termsAndConditions === "on" ? true : false;
      console.log(user);

      try {
        const response = await fetch("http://localhost:9001/create-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          const responseBody = await response.json();
          console.log(responseBody);
          throw new Error(`HTTP error! status: ${response.status} `);
        } else {
          navigate("/get-started");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <img
        src="/transparentlogo.png"
        alt="Shonen Showdown Logo"
        className="logo"
      />
      <h1>Create Account</h1>
      <p>Will You Come Out On Top?</p>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="create-account"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              placeholder="First name"
              // defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="30" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please create a password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" onSubmit={handleSubmit}>
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default CreateAccount;
