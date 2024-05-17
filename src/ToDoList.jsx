import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [favorites, setFavorites] = useState([]);

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function addToDo() {
    if (newTodo.trim() !== "") {
      setTodos((t) => [...t, newTodo]);
      setNewTodo("");
    }
  }

  function deleteToDo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function moveToDoUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = 
      [updatedTodos[index - 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

  function moveToDoDown(index) {
    if (index < todos.length) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = 
      [updatedTodos[index + 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

  function addToFavorites(props) {
    let array = favorites;
    let addArray = true;

    array.map((item, key) => {
      if (item === props) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props);
    }
    setFavorites([...array]);
    console.log("added to favorites")
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Add a Task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addToDo}>
          Add
        </button>
      </div>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <button className="fav-button" onClick={() => addToFavorites(index)}>
              ❤
            </button>
            <span className="text">{todo}</span>
            <button className="delete-button" onClick={() => deleteToDo(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveToDoUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveToDoDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
      <div>
        <button className="display-fav-button">
          Display Favorites
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
