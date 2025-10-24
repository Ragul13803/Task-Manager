import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskRequest } from '../redux/taskSlice';

const TaskForm = ({ handleChange }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.tasks.loading);

  const onSubmit = (data) => {
    dispatch(addTaskRequest(data));
    handleChange(false); 
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '340px',
        padding: '20px',
        zIndex: 999,
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>Add New Task</h2>
        <button
          onClick={() => handleChange(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff4d4d',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            {...register('title', { required: 'Title is required' })}
            style={{
              width: '90%',
              padding: '8px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
          {errors.title && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.title.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Description</label>
          <input
            type="text"
            placeholder="Enter task description"
            {...register('description')}
            style={{
              width: '90%',
              padding: '8px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px 0',
            backgroundColor: loading ? '#ccc' : '#009249',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s ease',
          }}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
