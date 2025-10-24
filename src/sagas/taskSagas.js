import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTasksSuccess, fetchTasksFailure, addTaskSuccess, addTaskFailure } from '../redux/taskSlice';

const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Replace with your real API URL

// Fetch tasks from API
function* fetchTasks() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

// Add task via API
function* addTask(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(addTaskSuccess(response.data));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

export default function* taskSagas() {
  yield takeEvery('tasks/fetchTasksRequest', fetchTasks);
  yield takeEvery('tasks/addTaskRequest', addTask);
}
