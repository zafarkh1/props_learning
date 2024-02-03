import React from "react";

const Props = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </div>
  );
};

export default Props;
