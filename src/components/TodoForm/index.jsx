import React from "react";
import { useTodoState } from "../../contexts";

function TodoForm() {
  const { inputText, setInputText, todos, setTodos, setStatus } = useTodoState();
  
  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText("");
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }
  return (
    <>
      <div>
        <header>Todo List</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            value={inputText}
            onChange={handleInput}
          />
          <button type="submit" className="todo-button">
            Add
          </button>
          <div className="select">
            <select name="todos" className="filter-todo" onChange={handleStatus}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
