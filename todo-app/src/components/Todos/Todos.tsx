import Button from "../Button/Button";
import { FaPen, FaTrash } from 'react-icons/fa';
import "./Todos.css";

// Todos component to display the list of todos
const Todos = ({ todos, removeTodo, editTodo, dispatch }) => {

  // Function to handle toggling the completed state of a todo
  const handleCheckedTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  // Function to handle editing a todo
  const handleEditTodo = (index) => {
    const newTodo = prompt("Enter new todo:");
    if (newTodo !== null && newTodo !== "") {
      editTodo(index, newTodo);
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (index) => {
    removeTodo(index);
  };

  return (
    <ul className="todos">
      {todos.map((todo, index) => (
        <li key={index}>
          {/* Checkbox to toggle completed state of a todo */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckedTodo(todo.id)}
          />
          {/* Display todo text, with a class indicating if it's completed */}
          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>
          {/* Button to edit the todo */}
          <span className="btn">
          <Button onClick={() => handleEditTodo(index)}>
            <FaPen />
          </Button>
          {/* Button to delete the todo */}
          <Button onClick={() => handleDeleteTodo(index)}>
            <FaTrash />
          </Button>

          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
