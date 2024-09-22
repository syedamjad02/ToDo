import { useState } from 'react';
import EditToDo from './EditToDo';

function ToDoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <EditToDo
          todo={todo}
          updateTodo={updateTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className="todo-content">
          <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div className="button-container">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
