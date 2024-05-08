import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState(["Feed the Dog", "Take Out Trash", "Practice Coding"]);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value)
  }

  function addToDo() {

    if (newTodo.trim() !== "") {
      setTodos(t => [...t, newTodo]);
      setNewTodo("");
    }
  }

  function deleteToDo(index) {
    
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); 
  }

  function moveToDoUp(index) {

  }

  function moveToDoDown(index) {

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
        <button
          className="add-button"
          onClick={addToDo}
        >
          Add
        </button>
      </div>

      <ol>
        {todos.map((todo, index) => 
          <li key={index}>
            <span className="text">{todo}</span>
            <button
              className="delete-button"
              onClick={() => deleteToDo(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => moveToDoUp(index)}
            >
              👆
            </button>
            <button
              className="move-button"
              onClick={() => moveToDoDown(index)}
            >
              👇
            </button>
          </li>
        )}
      </ol>

    </div>
  )
}

export default ToDoList;
