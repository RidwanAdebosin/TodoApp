import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <main className="todo-container">
      <Header/>
      <Input inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </main>
  );
};

export default App;
