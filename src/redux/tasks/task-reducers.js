import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import taskActions from './task-actions.js';

const tasks = createReducer([], {
  [taskActions.fetchTaskSuccess]: (_, { payload }) => payload,
  [taskActions.addTaskSuccess]: (state, { payload }) => [...state, payload],
  [taskActions.deleteTaskSuccess]: (state, { payload }) => [
    ...state.filter(item => item._id !== payload),
  ],

  [taskActions.changeTaskSuccess]: (state, { payload }) => [
    ...state.map(task =>
      task._id === payload.taskId
        ? {
            ...task,
            hoursWasted: payload.hoursWasted,
            hoursWastedPerDay: [
              ...task.hoursWastedPerDay.map(item =>
                item.currentDay === payload.currentDay
                  ? { ...item, singleHoursWasted: payload.singleHoursWasted }
                  : item,
              ),
            ],
          }
        : task,
    ),
  ],
});

const loading = createReducer(false, {
  [taskActions.fetchTaskRequest]: () => true,
  [taskActions.fetchTaskSuccess]: () => false,
  [taskActions.fetchTaskError]: () => false,
  [taskActions.addTaskRequest]: () => true,
  [taskActions.addTaskSuccess]: () => false,
  [taskActions.addTaskError]: () => false,
  [taskActions.deleteTaskRequest]: () => true,
  [taskActions.deleteTaskSuccess]: () => false,
  [taskActions.deleteTaskError]: () => false,
  [taskActions.changeTaskRequest]: () => true,
  [taskActions.changeTaskSuccess]: () => false,
  [taskActions.changeTaskError]: () => false,
});

const filter = createReducer('', {
  [taskActions.changeFilter]: (_, { payload }) => payload,
});

const currentDay = createReducer(Date.now(), {
  [taskActions.changeCurrentDay]: (_, { payload }) => payload,
});

const handleError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const error = createReducer(null, {
  [taskActions.fetchTaskRequest]: clearError,
  [taskActions.fetchTaskError]: handleError,
  [taskActions.addTaskRequest]: clearError,
  [taskActions.addTaskError]: handleError,
  [taskActions.deleteTaskRequest]: clearError,
  [taskActions.deleteTaskError]: handleError,
  [taskActions.changeTaskRequest]: clearError,
  [taskActions.changeTaskError]: handleError,
});

export default combineReducers({
  tasks,
  filter,
  currentDay,
  loading,
  error,
});
