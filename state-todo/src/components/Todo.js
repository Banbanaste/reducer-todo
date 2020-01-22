import React from "react";

const Todo = props => {
  return (
    <div style={{ width: "150px", padding: "25px" }}>
      <h4>{props.todo}</h4>
    </div>
  );
};

export default Todo;
