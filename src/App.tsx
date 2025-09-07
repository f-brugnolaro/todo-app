import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoItem from "./components/TodoItem";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Todo App</h1>
        <button onClick={openModal} className="add-todo-btn">
          + Add Todo
        </button>
      </header>

      <main className="app-main">
        {todos.length === 0 ? (
          <div className="empty-state">
            <h3>No todos yet!</h3>
            <p>Click "Add Todo" to create your first task.</p>
          </div>
        ) : (
          <div className="todos-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
              />
            ))}
          </div>
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addTodo}
        title="Add New Todo"
      />
    </div>
  );
}

export default App;
