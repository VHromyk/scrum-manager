import axios from 'axios';
import { toast } from 'react-toastify';
import sprintsActions from './sprints-actions';

const fetchSprints = projectId => async dispatch => {
  dispatch(sprintsActions.fetchSprintsRequest());

  try {
    const { data } = await axios.get(`/api/projects/${projectId}/sprints`);
    dispatch(sprintsActions.fetchSprintsSuccess(data.sprints));
  } catch (error) {
    dispatch(sprintsActions.fetchSprintsError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

const addSprint =
  ({ projectId, name, startDate, endDate, duration }) =>
  async dispatch => {
    const sprint = { name, startDate, endDate, duration };

    dispatch(sprintsActions.addSprintRequest());

    try {
      const { data } = await axios.post(
        `/api/projects/${projectId}/sprints`,
        sprint,
      );

      dispatch(sprintsActions.addSprintSuccess(data.sprint));
      toast.success('Sprint added successfully');
    } catch (error) {
      dispatch(sprintsActions.addSprintError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const deleteSprint = (projectId, sprintId) => async dispatch => {
  dispatch(sprintsActions.deleteSprintRequest());

  try {
    await axios.delete(`/api/projects/${projectId}/sprints/${sprintId}`);
    dispatch(sprintsActions.deleteSprintSuccess(sprintId));
  } catch (error) {
    dispatch(sprintsActions.deleteSprintError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

const renameSprint =
  ({ projectId, sprintId, newName: name }) =>
  async dispatch => {
    const renameSprint = { name };

    dispatch(sprintsActions.renameSprintRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/sprints/${sprintId}/name`,
        renameSprint,
      );

      dispatch(sprintsActions.renameSprintSuccess(data));
    } catch (error) {
      dispatch(sprintsActions.renameSprintError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const sprintsOperations = {
  fetchSprints,
  addSprint,
  deleteSprint,
  renameSprint,
};

export default sprintsOperations;
