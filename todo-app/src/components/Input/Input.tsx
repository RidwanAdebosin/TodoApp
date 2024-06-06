import { FaPlus } from 'react-icons/fa'; 
import Button from "../Button/Button";

const Input = ({ inputValue, setInputValue, addTodo }) => {

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo();
    }
  };

  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        placeholder="...type in your todo"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button>
        <FaPlus />
      </Button>
    </form>
  );
};

export default Input;
