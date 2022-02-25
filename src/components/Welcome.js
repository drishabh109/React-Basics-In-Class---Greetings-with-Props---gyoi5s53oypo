import React, { useState } from "react";

function Welcome(prop) {
  const [name, setName] = useState();
  const pro = () => {
    setName((name) => !name);
  };
  return (
    <>
      <h1>Hey !</h1>
      <button onclick={pro}>click</button>
      {name && <h1>{prop.name}</h1>}
      <h2>Welcome to Newton School.</h2>
    </>
  );
}

export default Welcome;
