
import { v4 as uuidv4 } from 'uuid'; 
import Button from "../Button/Button";
import { FaPlus } from 'react-icons/fa'; 

const Input = ({ inputValue, setInputValue, todos, setTodos }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(), 
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <form className="input" onSubmit={handleAddTodo}> {/* Use form element */}
      <input
        placeholder="...type in your todo"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit">{<FaPlus/>}</Button> {/* Use type="submit" for the button */}
    </form>
  );
};

export default Input;
