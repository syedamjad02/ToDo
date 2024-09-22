import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  const [todos, setTodos] = useState([]);

  // Add ToDo Handler
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  // Delete ToDo Handler
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Update ToDo Handler
  const updateTodo = (id, updatedText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
