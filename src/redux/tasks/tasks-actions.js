import { createAction } from '@reduxjs/toolkit';

const fetchTasksRequest = createAction('tasks/fetchTasksRequest');
const fetchTasksSuccess = createAction('tasks/fetchTasksSuccess');
const fetchTasksError = createAction('tasks/fetchTasksError');

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

const tasksActions = {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
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

export default tasksActions;
