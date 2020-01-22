import React, { useState, useReducer } from "react";

import { initState, todoReducer } from "../reducers/todoReducer";

import Todo from "./Todo";

const List = () => {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
        >
          Add Todo
        </button>
      </div>
      {state.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default List;
