import { useContext, createContext, useState } from "react";

const TodoContext = createContext();

export const TodoStateProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fTodos, setFTodos] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        status,
        setStatus,
        fTodos,
        setFTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoState = () => useContext(TodoContext);
