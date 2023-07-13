import { TodoItem } from "..";
import { useTodoState } from "../../contexts";

function TodoList() {
  const { fTodos: todos, setTodos } = useTodoState();

  const deleteTodo = (todo) => {
    let filteredTodos = todos.filter((item) => item !== todo);
    setTodos(filteredTodos);
  };

  const completeTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item === todo) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
