import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleCompleteToggle = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  const handleEdit = () => {
    editTodo(task, task.id);
  };

  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      <p onClick={handleCompleteToggle}>{task.task}</p>
      <div id='icons'>
        <FontAwesomeIcon icon={faPen} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};
