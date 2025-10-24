import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskRequest } from '../redux/taskSlice';

const TaskForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.tasks.loading);

  const onSubmit = (data) => {
    dispatch(addTaskRequest(data));
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            {...register('description')}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
