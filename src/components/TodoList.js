import React from "react";

const TodoList = (todo) => {
  return (
    <li className="listItem">
      {todo.item}
      <i
        class="fa-solid fa-trash"
        onClick={(e) => {
          todo.deleteItem(todo.index);
        }}
      ></i>
    </li>
  );
};

export default TodoList;
