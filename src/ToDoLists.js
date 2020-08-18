import React from "react";

const ToDoLists = (props) => {
  return (
    <div className="todo_style">
      {/* in This we are using callback function */}
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />

      <li>{props.text}</li>
    </div>
  );
};

export default ToDoLists;
