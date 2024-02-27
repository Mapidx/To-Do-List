import React from "react";

const TodoList = (todo) => {
  return (
    <li className="listItem">
      {todo.item}
      <div className="itag">
        <i
          class="fa-solid fa-pen-clip"
          onClick={(e) => todo.editItem(todo.index)}
        ></i>
        <i
          class="fa-solid fa-trash"
          onClick={(e) => {
            todo.deleteItem(todo.index);
          }}
        ></i>
      </div>
    </li>
  );
};

export default TodoList;
