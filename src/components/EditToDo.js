import { useState } from 'react';

function EditToDo({ todo, updateTodo, setIsEditing }) {
  const [newText, setNewText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() !== '') {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button type="submit">Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
}

export default EditToDo;
