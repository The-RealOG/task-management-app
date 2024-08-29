// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
