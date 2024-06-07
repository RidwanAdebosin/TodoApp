import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import { useReducer } from "react";

interface State {
  todos: {text: string; completed: boolean}[];
  inputValue: string;
}

type Action =
| {type: 'SET_INPUT_VALUE'; payload:string}
| { type: 'ADD_TODO' }
| { type: 'REMOVE_TODO'; payload: number }
| { type: 'EDIT_TODO'; payload: { index: number; newTodo: string } };


const App: React.FC = () => {
  // Define the initial state
  const initialState = { 
    todos: [],           
    inputValue: ''      
  };

  // Define the reducer function to manage state changes
  function reducer(state:State, action: Action): State {
    switch (action.type) {
      case 'SET_INPUT_VALUE':
        // Update inputValue in state based on action payload
        return {
          ...state,
          inputValue: action.payload
        };
      case 'ADD_TODO':
        if (state.inputValue.trim() !== '') {
          // Create a new todo object and add it to the todos array in state
          const newTodo = {
            text: state.inputValue,
            completed: false // Assuming new todos are initially not completed
          };
          return {
            ...state,
            todos: [...state.todos, newTodo],
            inputValue: '' // Clear inputValue after adding todo
          };
        } else {
          return state; // If inputValue is empty or whitespace, return state unchanged
        }
      case 'REMOVE_TODO':
        // Remove todo from todos array in state based on action payload (index)
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload)
        };
      case 'EDIT_TODO':
        // Update text of todo at specified index based on action payload (index, newTodo)
        const { index, newTodo } = action.payload;
        return {
          ...state,
          todos: state.todos.map((todo, idx) =>
            idx === index ? { ...todo, text: newTodo } : todo
          )
        };
      default:
        console.warn('Unknown action type:', action.type);
        return state; // Return state unchanged for unknown action types
    }
  }

  // Initialize state and dispatcher using useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="todo-container">
      {/* Render Header component */}
      <Header />
      {/* Render Input component and pass necessary props */}
      <Input
        inputValue={state.inputValue}
        setInputValue={(value) => dispatch({ type: 'SET_INPUT_VALUE', payload: value })}
        addTodo={() => dispatch({ type: 'ADD_TODO' })}
      />
      {/* Render Todos component and pass necessary props */}
      <Todos 
        todos={state.todos}
        removeTodo={(index) => dispatch({ type: 'REMOVE_TODO', payload: index })}
        editTodo={(index, newTodo) => dispatch({type: 'EDIT_TODO', payload: {index, newTodo}})}
      />
    </main>
  );
};

export default App;



