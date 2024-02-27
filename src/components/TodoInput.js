import React, { useState } from "react";

const TodoInput = (todo) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="cont">
      <div className="top">
        <button
          className="clear"
          onClick={() => {
            todo.clearList();
            setInputText("");
          }}
        >
          <span className="clearAll">Clear All</span>
        </button>
      </div>
      <div className="adding">
        <input
          type="text"
          className=""
          id="todo"
          placeholder="Enter your TODO task"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="add"
          onClick={() => {
            todo.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
