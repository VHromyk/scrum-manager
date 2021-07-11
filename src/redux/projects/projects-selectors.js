const getAllProjects = state => state.projects.items;
const getIsLoading = state => state.projects.isLoading;
const getError = state => state.projects.error;

const projectsSelectors = {
  getAllProjects,
  getIsLoading,
  getError,
};

export default projectsSelectors;
