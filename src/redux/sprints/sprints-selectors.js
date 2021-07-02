const getAllSprints = state => state.sprints.items;
const getIsLoading = state => state.sprints.isLoading;
const getError = state => state.sprints.error;

const sprintsSelectors = {
  getAllSprints,
  getIsLoading,
  getError,
};

export default sprintsSelectors;
