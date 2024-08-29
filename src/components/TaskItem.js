// src/components/TaskItem.js
import React from 'react';
import axios from 'axios';

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/tasks/${task._id}`);
      window.location.reload(); // Simple way to refresh the task list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
