import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.tasks.items;
const getFilter = state => state.tasks.filter;
const getCurrentDay = state => state.tasks.currentDay;
const getLoading = state => state.tasks.loading;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedTask = filter.toLowerCase();
    return tasks.filter(task =>
      task.name.toLowerCase().includes(normalizedTask),
    );
  },
);

const tasksSelectors = {
  getTasks,
  getFilter,
  getCurrentDay,
  getLoading,
  getVisibleTasks,
};

export default tasksSelectors;
