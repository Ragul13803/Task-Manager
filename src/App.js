import logo from './logo.svg';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/tasklist';
import { useState } from 'react';

function App() {
  const [isAdd, setIsAdd] = useState(false);

  const handleChange = (option) => {
    setIsAdd(option)
  }

  return (
    <div className="App" style={{ position: 'relative'}}>
      <div>
        <h2>📝 Task List</h2>
        <div><button style={{ padding: 8, backgroundColor: '#009249ff', fontWeight: 'bold', border: 'none', borderRadius: '6px', marginLeft: '90vw' }} onClick={() => setIsAdd(true)}>(+) Add Task</button></div>
        {isAdd && <TaskForm handleChange={handleChange} />}
        <TaskList />
      </div>
    </div>
  );
}

export default App;
