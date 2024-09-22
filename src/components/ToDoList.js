import ToDoItem from './ToDoItem';


function ToDoList({ todos, deleteTodo, updateTodo }) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default ToDoList;
