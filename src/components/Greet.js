import React from "react";

/*
function Greet() {
  return <h1>Hello World</h1>
}
*/

const Greet = (props) => {
  return (
    <div>
      <h1>Hello {props.name} </h1>
      <p>({props.code})</p>
    </div>
  );
};

export default Greet;
