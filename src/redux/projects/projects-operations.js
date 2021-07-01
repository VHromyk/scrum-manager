import axios from 'axios';
import projectsActions from './projects-actions';
import { toast } from 'react-toastify';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const respone = await axios.get('/api/projects');

    dispatch(projectsActions.fetchProjectsSuccess(respone.data.data.projects));
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
      const respone = await axios.post('/api/projects', project);

      dispatch(projectsActions.addProjectSuccess(respone.data.data.project));
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

const renameProject =
  ({ projectId, newName: name }) =>
  async dispatch => {
    const renameProject = { name };

    dispatch(projectsActions.renameProjectRequest());

    try {
      const respone = await axios.patch(
        `/api/projects/${projectId}/name`,
        renameProject,
      );

      dispatch(projectsActions.renameProjectSuccess(respone.data.data));
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
