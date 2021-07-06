const getAllProjects = state => state.projects.items;
const getAllPeople = state => {
  const arr = state.projects.items;
  const result = arr[arr.length - 1].owners;

  return result;
};
const getIsLoading = state => state.projects.isLoading;
const getError = state => state.projects.error;

const projectsSelectors = {
  getAllProjects,
  getAllPeople,
  getIsLoading,
  getError,
};

export default projectsSelectors;
