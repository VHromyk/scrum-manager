const getTasks = state => state.tasks.items;
const getFilter = state => state.tasks.filter;
const getCurrentDay = state => state.tasks.currentDay;
const getLoading = state => state.tasks.loading;

const tasksSelectors = {
  getTasks,
  getFilter,
  getCurrentDay,
  getLoading,
};

export default tasksSelectors;
