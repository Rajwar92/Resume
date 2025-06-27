import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Technical Writer",
          "API Documentation Specialist",
          "DITA XML Expert",
          "User Guide Creator",
          "Aviation Documentation Professional",
          "Technical Content Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;