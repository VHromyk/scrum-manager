import { createAction } from '@reduxjs/toolkit';

const fetchTaskRequest = createAction('tasks/fetchTaskRequest');
const fetchTaskSuccess = createAction('tasks/fetchTaskSuccess');
const fetchTaskError = createAction('tasks/fetchTaskError');

const addTaskRequest = createAction('tasks/addTaskRequest');
const addTaskSuccess = createAction('tasks/addTaskSuccess');
const addTaskError = createAction('tasks/addTaskError');

const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
const deleteTaskError = createAction('tasks/deleteTaskError');

const changeTaskRequest = createAction('tasks/changeTaskRequest');
const changeTaskSuccess = createAction('tasks/changeTaskSuccess');
const changeTaskError = createAction('tasks/changeTaskError');

const changeFilter = createAction('tasks/changeFilter');
const changeCurrentDay = createAction('tasks/changeCurrentDay');

const taskActions = {
  fetchTaskRequest,
  fetchTaskSuccess,
  fetchTaskError,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  changeTaskRequest,
  changeTaskSuccess,
  changeTaskError,
  changeFilter,
  changeCurrentDay,
};

export default taskActions;
