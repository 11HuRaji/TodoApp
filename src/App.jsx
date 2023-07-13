import React, { useEffect } from "react";
import { TodoForm, TodoList } from "./components";

import { useTodos, useStatus } from "./contexts";
import "./App.css";

function App() {
  const { setFTodos, todos } = useTodos();
  const { status } = useStatus();

  const handleFilter = () => {
    if (status === "completed") {
      setFTodos(todos.filter((todo) => todo.completed == true));
    } else if (status === "uncompleted") {
      setFTodos(todos.filter((todo) => todo.completed == false));
    } else {
      setFTodos(todos);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [status, todos]);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
