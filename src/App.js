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
    const permission = window.confirm("Are you sure you want to erase all");
    if (permission) {
      setListTodo([]);
    } else {
      return "";
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const editListItem = (key) => {
    let newListTodo = [...listTodo];
    const editedTask = window.prompt("Edit the Task: ", newListTodo[key]);
    if (editedTask) {
      newListTodo[key] = editedTask;
      setListTodo(newListTodo);
    } else {
      prompt("Enter a task name please!");
    }
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
    <div className="myName">
      <div className="container">
        <div className="head">
          <div className="date">
            <h1>{currentDay}</h1>
            <h3>{currentDate}</h3>
          </div>

          <img src="./images/mapidxblack.png" alt="banner" />
        </div>

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
      <div className="name">Dipam Pradhan</div>
    </div>
  );
}

export default App;
