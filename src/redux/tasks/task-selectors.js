const getTasks = state => state.tasks.tasks;
const getFilter = state => state.tasks.filter;
const getCurrentDay = state => state.tasks.currentDay;
const getLoading = state => state.tasks.loading;

const taskSelectors = {
  getTasks,
  getFilter,
  getCurrentDay,
  getLoading,
};

export default taskSelectors;
