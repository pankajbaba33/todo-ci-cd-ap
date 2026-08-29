import { useState } from 'react';
import './App.css';

const initialTodos = [
  { id: 1, text: 'Review project brief' },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const value = input.trim();
    if (!value) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: value },
    ]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1>Todo App Items Add</h1>

        <div className="todo-input-row">
          <label htmlFor="todo-input" className="sr-only">
            Todo input
          </label>
          <input
            id="todo-input"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add a task"
            onKeyDown={(event) => {
              if (event.key === 'Enter') addTodo();
            }}
          />
          <button type="button" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button
                type="button"
                className="delete-btn"
                aria-label={`Delete ${todo.text}`}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <p className="todo-summary">{todos.length} tasks left</p>
      </div>
    </div>
  );
}

export default App;
