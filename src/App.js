import React, {useState} from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false}]);
    setNewTask('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, completed:!task.completed } : task
    )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{maxWidth: '400px', margin: '50px auto', textAlign: 'center'}}>
      <h1>Todo App</h1>
      <div style={{marginBottom: '20px' }}>
        <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        style={{padding: '10px', fontSize: '16px', width: '70%'}}
        />
        <button onClick={addTask} style={{padding: '10px', marginleft: '10px'}}>
          Add
        </button>
      </div>
      <ul style= {{ listStyleType: 'none', padding: 0}}>
        {tasks.map((task) => (
        <li key= {task.id} style={{  marginBottom: '10px', display:'flex', justifyContent: 'space-between'}}>
          <span
          onClick={() => toggleTaskCompletion(task.id)}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          >
            {task.text}
          </span>
          <button onClick={()=> deleteTask(task.id)} style={{ marginLeft: '10px'}}>
            Delete
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default TodoApp
