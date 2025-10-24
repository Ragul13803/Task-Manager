import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest } from '../redux/taskSlice';
import './TaskList.css'; // Add a CSS file

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  if (loading) return <p className="loading">Loading tasks...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="task-list-container">
      <div className="task-grid">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description || 'No description provided'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
