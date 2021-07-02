import axios from 'axios';
import projectsActions from './projects-actions';
import { toast } from 'react-toastify';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const { data } = await axios.get('/api/projects');

    dispatch(projectsActions.fetchProjectsSuccess(data.projects));
  } catch ({ message }) {
    dispatch(projectsActions.fetchProjectsError(message));
    toast.error('Something went wrong, try again later');
  }
};

const addProject =
  ({ name, description }) =>
  async dispatch => {
    const project = { name, description };
    dispatch(projectsActions.addProjectRequest());

    try {
      const { data } = await axios.post('/api/projects', project);

      dispatch(projectsActions.addProjectSuccess(data.project));
    } catch ({ message }) {
      dispatch(projectsActions.addProjectError(message));
      toast.error('Something went wrong, try again later');
    }
  };

const deleteProject = projectId => async dispatch => {
  console.log('projectId:', projectId);

  dispatch(projectsActions.deleteProjectRequest());

  try {
    await axios.delete(`/api/projects/${projectId}`);
    dispatch(projectsActions.deleteProjectSuccess(projectId));
  } catch ({ message }) {
    dispatch(projectsActions.deleteProjectError(message));
  }
};

// Перевірити
const renameProject =
  ({ projectId, name }) =>
  async dispatch => {
    const renameProject = { name };

    dispatch(projectsActions.renameProjectRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/name`,
        renameProject,
      );

      dispatch(projectsActions.renameProjectSuccess(data));
    } catch ({ message }) {
      dispatch(projectsActions.renameProjectError(message));
    }
  };

const projectsOperations = {
  fetchProjects,
  addProject,
  deleteProject,
  renameProject,
};

export default projectsOperations;