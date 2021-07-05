const getAllProjects = state => state.projects.items;
const getAllPeople = state => state.projects.items.owners;
const getIsLoading = state => state.projects.isLoading;
const getError = state => state.projects.error;

const projectsSelectors = {
  getAllProjects,
  getAllPeople,
  getIsLoading,
  getError,
};

export default projectsSelectors;
