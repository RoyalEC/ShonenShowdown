import React from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <>
      <div>
        <Link to="/get-started">
          <h1>Get Started</h1>
        </Link>
      </div>
    </>
  );
}

export default GetStarted;
