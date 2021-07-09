import axios from 'axios';
import { toast } from 'react-toastify';
import projectsActions from './projects-actions';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const { data } = await axios.get('/api/projects');

    dispatch(projectsActions.fetchProjectsSuccess(data.projects));
  } catch (error) {
    dispatch(projectsActions.fetchProjectsError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
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
      toast.success('Project added successfully');
    } catch (error) {
      dispatch(projectsActions.fetchProjectsError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const deleteProject = projectId => async dispatch => {
  dispatch(projectsActions.deleteProjectRequest());

  try {
    await axios.delete(`/api/projects/${projectId}`);
    dispatch(projectsActions.deleteProjectSuccess(projectId));
  } catch (error) {
    dispatch(projectsActions.deleteProjectError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

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
    } catch (error) {
      dispatch(projectsActions.renameProjectError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const addPeople = (projectId, email) => async dispatch => {
  dispatch(projectsActions.addPeopleRequest());

  try {
    const { data } = await axios.patch(
      `/api/projects/${projectId}/invite`,
      email,
    );

    const newTeamMember = data.user.email;
    dispatch(projectsActions.addPeopleSuccess({ newTeamMember, projectId }));
  } catch ({ message }) {
    dispatch(projectsActions.addPeopleError(message));

    if (message === 'Request failed with status code 404') {
      toast.error('User with such email does not exist');
      return;
    }

    toast.error('Something went wrong, try again later');
  }
};

const projectsOperations = {
  fetchProjects,
  addProject,
  deleteProject,
  renameProject,
  addPeople,
};

export default projectsOperations;
