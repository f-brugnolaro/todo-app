import React from "react";
import type { Todo } from "../types/todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
          aria-label={`Mark "${todo.text}" as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">{todo.createdAt.toLocaleDateString()}</span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        title="Delete todo"
        aria-label="Delete todo"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
