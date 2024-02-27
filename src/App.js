import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const clearItem = () => {
    setListTodo([]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const editListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo[key] = window.prompt("Edit the Task: ");
    setListTodo(newListTodo);
  };

  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      // year: "numeric",
      // month: "long",
      // day: "numeric",
    };
    setCurrentDay(today.toLocaleDateString(undefined, options));
  }, []);

  useEffect(() => {
    const today = new Date();
    const options = {
      // weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div className="container">
      <div className="head">
        <h1>{currentDay}</h1>
        <img src="./images/banner.webp" alt="banner" />
      </div>
      <h3>{currentDate}</h3>

      <TodoInput addList={addList} clearList={clearItem} />
      <div className="heading">
        <h1>TO-DO LISTS</h1>
        <div className="border"></div>
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
