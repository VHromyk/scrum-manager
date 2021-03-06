import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasks-actions.js';

const items = createReducer([], {
  [tasksActions.fetchTasksSuccess]: (_, { payload }) => payload,
  [tasksActions.addTaskSuccess]: (state, { payload }) => [...state, payload],
  [tasksActions.deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [tasksActions.changeTaskSuccess]: (state, { payload }) =>
    state.map(task =>
      task.id === payload.id
        ? {
            ...task,
            spentTime: payload.spentTime,
          }
        : task,
    ),
});

const isLoading = createReducer(false, {
  [tasksActions.fetchTasksRequest]: () => true,
  [tasksActions.fetchTasksSuccess]: () => false,
  [tasksActions.fetchTasksError]: () => false,

  [tasksActions.addTaskRequest]: () => true,
  [tasksActions.addTaskSuccess]: () => false,
  [tasksActions.addTaskError]: () => false,

  [tasksActions.deleteTaskRequest]: () => true,
  [tasksActions.deleteTaskSuccess]: () => false,
  [tasksActions.deleteTaskError]: () => false,

  [tasksActions.changeTaskRequest]: () => true,
  [tasksActions.changeTaskSuccess]: () => false,
  [tasksActions.changeTaskError]: () => false,
});

const filter = createReducer('', {
  [tasksActions.changeFilter]: (_, { payload }) => payload,
});

const currentDay = createReducer(Date.now(), {
  [tasksActions.changeCurrentDay]: (_, { payload }) => payload,
});

const handleError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const error = createReducer(null, {
  [tasksActions.fetchTasksRequest]: clearError,
  [tasksActions.fetchTasksError]: handleError,

  [tasksActions.addTaskRequest]: clearError,
  [tasksActions.addTaskError]: handleError,

  [tasksActions.deleteTaskRequest]: clearError,
  [tasksActions.deleteTaskError]: handleError,

  [tasksActions.changeTaskRequest]: clearError,
  [tasksActions.changeTaskError]: handleError,
});

export default combineReducers({
  items,
  filter,
  currentDay,
  isLoading,
  error,
});
