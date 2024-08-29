// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [taskAdded, setTaskAdded] = useState(false);

  const handleTaskAdded = () => {
    setTaskAdded(!taskAdded); // Toggle to refresh task list
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={taskAdded} />
    </div>
  );
}

export default App;
