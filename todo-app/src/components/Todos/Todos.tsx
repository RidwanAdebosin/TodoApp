import Button from "../Button/Button";
import { FaPen, FaTrash } from 'react-icons/fa';
import "./Todos.css";

const Todos = ({ todos, setTodos }) => {
  const handleCheckedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckedTodo(todo.id)}
          />
          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>
          <Button>
            <FaPen />
          </Button>
          <Button>
            <FaTrash />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
