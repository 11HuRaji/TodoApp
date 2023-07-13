import { useContext, createContext, useState } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [fTodos, setFTodos] = useState([]);

  return (
    <TodosContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        fTodos,
        setFTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
